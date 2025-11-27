# Comments and Likes API Issues & Fixes

## Issues Found

### 1. **Missing Resource Validation**
- **Problem**: Methods don't verify that posts/comments exist before operating on them
- **Impact**: Can cause cryptic  database errors or allow operations on non-existent resources
- **Affected Methods**:
  - `addComment` - doesn't verify post exists
  - `likePost` - doesn't verify post exists  
  - `likeComment` - doesn't verify comment exists
  - `getAllCommentsByPostId` - doesn't verify post exists
  - `getPostLikeCount` - doesn't verify post exists
  - `getCommentLikeCount` - doesn't verify comment exists

### 2. **Inconsistent Like Responses**
- **Problem**: `likePost` and `likeComment` return different response formats
- **Current Behavior**:
  - `likePost`: Returns `{message: "Unlike the post"}` on unlike, but returns entire Like object on like
  - `likeComment`: Returns Like object for both like and unlike
- **Impact**: Frontend code must handle different response shapes, making it error-prone

### 3. **Missing Comment Reply Validation**
- **Problem**: When replying to a comment, system doesn't verify:
  - Parent comment exists
  - Parent comment belongs to the same post
- **Impact**: Could create orphaned replies or replies on wrong posts

### 4. **Incomplete Cascade Delete for Comments**
- **Problem**: `deleteComment` only deletes likes on the main comment, not on its replies
- **Impact**: Orphaned likes remain in database when nested comments are deleted
- **Database Growth**: Accumulation of orphaned data over time

### 5. **Missing Nested Replies in getAllCommentsByPostId**
- **Problem**: The `replies` include doesn't include likes on those replies
- **Impact**: Frontend can't display like counts on nested comment replies

---

## Recommended Fixes

### Fix 1: Add Existence Validation

```typescript
addComment: async (commentData: CommentInputDto) => {
    // Verify the post exists
    const post = await db.post.findUnique({
        where: { id: commentData.post_id }
    });
    if (!post) {
        throw new Error("Post not found");
    }

    // If replying to a comment, verify parent comment exists
    if (commentData.parent_id) {
        const parentComment = await db.comment.findUnique({
            where: { id: commentData.parent_id }
        });
        if (!parentComment) {
            throw new Error("Parent comment not found");
        }
        // Ensure parent comment belongs to the same post
        if (parentComment.post_id !== commentData.post_id) {
            throw new Error("Parent comment does not belong to this post");
        }
    }

    return await db.comment.create({
        // ... rest of implementation
    });
},
```

### Fix 2: Consistent Response Format for Likes

```typescript
likePost: async (user_id: string, post_id: string) => {
    // Verify the post exists
    const post = await db.post.findUnique({
        where: { id: post_id }
    });
    if (!post) {
        throw new Error("Post not found");
    }

    const existingLike = await db.like.findFirst({
        where: { user_id, post_id },
    });

    if (existingLike) {
        await db.like.delete({
            where: { id: existingLike.id },
        });
        return { action: "unliked", message: "Post unliked successfully" };
    }

    const like = await db.like.create({
        data: {
            user_id,
            post: { connect: { id: post_id } },
        },
    });
    return { action: "liked", message: "Post liked successfully", data: like };
},

likeComment: async (user_id: string, comment_id: string) => {
    // Verify the comment exists
    const comment = await db.comment.findUnique({
        where: { id: comment_id }
    });
    if (!comment) {
        throw new Error("Comment not found");
    }

    const existingLike = await db.like.findFirst({
        where: { user_id, comment_id },
    });

    if (existingLike) {
        await db.like.delete({
            where: { id: existingLike.id },
        });
        return { action: "unliked", message: "Comment unliked successfully" };
    }
    
    const like = await db.like.create({
        data: {
            user_id,
            comment: { connect: { id: comment_id } },
        },
    });
    return { action: "liked", message: "Comment liked successfully", data: like };
},
```

### Fix 3: Proper Cascade Delete

```typescript
deleteComment: async (comment_id: string) => {
    // Verify comment exists
    const comment = await db.comment.findUnique({
        where: { id: comment_id },
        include: {
            replies: true,
        },
    });
    if (!comment) {
        throw new Error("Comment not found");
    }

    // Delete all likes on this comment
    await db.like.deleteMany({ where: { comment_id } });
    
    // Delete likes on all nested replies
    if (comment.replies.length > 0) {
        const replyIds = comment.replies.map(r => r.id);
        await db.like.deleteMany({
            where: {
                comment_id: { in: replyIds }
            }
        });
    }

    // Delete the comment (cascade will delete replies)
    return await db.comment.delete({
        where: { id: comment_id },
    });
},
```

### Fix 4: Include Reply Likes

```typescript
getAllCommentsByPostId: async (post_id: string) => {
    // Verify the post exists
    const post = await db.post.findUnique({
        where: { id: post_id }
    });
    if (!post) {
        throw new Error("Post not found");
    }

    return await db.comment.findMany({
        where: { post_id },
        include: {
            replies: {
                include: {
                    likes: true,  // Include likes on replies too
                },
            },
            likes: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
},
```

### Fix 5: Validate in Like Count Methods

```typescript
getPostLikeCount: async (post_id: string) => {
    // Verify the post exists
    const post = await db.post.findUnique({
        where: { id: post_id }
    });
    if (!post) {
        throw new Error("Post not found");
    }

    const count = await db.like.count({
        where: { post_id },
    });
    return { post_id, likeCount: count };
},

getCommentLikeCount: async (comment_id: string) => {
    // Verify the comment exists
    const comment = await db.comment.findUnique({
        where: { id: comment_id }
    });
    if (!comment) {
        throw new Error("Comment not found");
    }

    const count = await db.like.count({
        where: { comment_id },
    });
    return { comment_id, likeCount: count };
},
```

---

## Summary of Changes

| Method | Issue Fixed | Benefit |
|--------|-------------|---------|
| `addComment` | Added post & parent comment validation | Prevents invalid comment creation |
| `likePost` | Added post existence check, consistent response | Better error messages, consistent API |
| `likeComment` | Added comment existence check, consistent response | Better error messages, consistent API |
| `deleteComment` | Added cascade delete for reply likes | Prevents orphaned data |
| `getAllCommentsByPostId` | Added post validation, nested reply likes | Complete data for UI, better errors |
| `getPostLikeCount` | Added post existence check | Better error handling |
| `getCommentLikeCount` | Added comment existence check | Better error handling |

---

## Impact on Frontend

### Before Fix:
```typescript
// Inconsistent handling needed
const result = await likePost(userId, postId);
if (result.message) {
  // It was an unlike
} else {
  // It was a like, has full object
}
```

### After Fix:
```typescript
// Consistent handling
const result = await likePost(userId, postId);
if (result.action === "liked") {
  // User liked, can access result.data
} else if (result.action === "unliked") {
  // User unliked
}
```

---

## Testing Recommendations

1. **Test Comment Reply Validation**:
   - Try to reply to non-existent comment → Should return "Parent comment not found"
   - Try to reply to comment from different post → Should return error

2. **Test Cascade Delete**:
   - Create comment with replies
   - Add likes to main comment and replies
   - Delete main comment
   - Verify all likes are deleted

3. **Test Like Consistency**:
   - Like a post → Should return `{action: "liked", ...}`
   - Unlike the same post → Should return `{action: "unliked", ...}`
   - Verify same for comments

4. **Test Resource Validation**:
   - Try to like non-existent post → Should return "Post not found"
   -Try to comment on non-existent post → Should return "Post not found"
