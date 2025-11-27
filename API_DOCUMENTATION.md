# Content Service API Documentation

Complete API reference for the community system with Nigerian LGA support.

## Base URL
```
http://localhost:{PORT}/api/v1
```

---

## Community Request Endpoints

### 1. Create Community Request
Submit a request to create a new community. Super admin approval required.

**Endpoint:** `POST /communities/request`

**Request Body:**
```json
{
  "requestedBy": "user-uuid",
  "name": "Tech Enthusiasts Lagos",
  "description": "A community for tech lovers in Lagos",
  "location": "Lagos, Nigeria",
  "state": "Lagos",
  "lga": "Ikeja"
}
```

**Success Response (201):**
```json
{
  "status": 201,
  "message": "Community request submitted successfully. Please wait for admin approval.",
  "data": {
    "id": "request-uuid",
    "name": "Tech Enthusiasts Lagos",
    "description": "A community for tech lovers in Lagos",
    "location": "Lagos, Nigeria",
    "state": "Lagos",
    "lga": "Ikeja",
    "requestedBy": "user-uuid",
    "status": "PENDING",
    "createdAt": "2025-11-27T12:00:00Z"
  }
}
```

**Error Response (400):**
```json
{
  "status": 400,
  "message": "A community with this name already exists. Please choose a different name."
}
```

---

### 2. Approve Community Request (Super Admin Only)
Approve a pending community creation request.

**Endpoint:** `POST /communities/requests/:id/approve`

**URL Parameters:**
- `id` - Request ID

**Request Body:**
```json
{
  "approvedBy": "admin-user-uuid"
}
```

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Community request approved successfully",
  "data": {
    "request": {
      "id": "request-uuid",
      "status": "APPROVED",
      "approvedBy": "admin-user-uuid",
      "communityId": "community-uuid"
    },
    "community": {
      "id": "community-uuid",
      "name": "Tech Enthusiasts Lagos",
      "status": "ACTIVE",
      "communityType": "USER_CREATED",
      "createdBy": "user-uuid"
    }
  }
}
```

---

### 3. Reject Community Request (Super Admin Only)
Reject a pending community creation request.

**Endpoint:** `POST /communities/requests/:id/reject`

**URL Parameters:**
- `id` - Request ID

**Request Body:**
```json
{
  "rejectedBy": "admin-user-uuid",
  "reason": "Community name violates content policy"
}
```

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Community request rejected",
  "data": {
    "id": "request-uuid",
    "status": "REJECTED",
    "rejectionReason": "Community name violates content policy",
    "approvedBy": "admin-user-uuid"
  }
}
```

---

### 4. Get Pending Community Requests (Super Admin Only)
Retrieve all pending community creation requests.

**Endpoint:** `GET /communities/requests/pending`

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Pending community requests retrieved successfully",
  "data": [
    {
      "id": "request-uuid-1",
      "name": "Tech Enthusiasts Lagos",
      "description": "A community for tech lovers",
      "requestedBy": "user-uuid-1",
      "status": "PENDING",
      "createdAt": "2025-11-27T12:00:00Z"
    },
    {
      "id": "request-uuid-2",
      "name": "Fitness Warriors",
      "description": "Stay fit together",
      "requestedBy": "user-uuid-2",
      "status": "PENDING",
      "createdAt": "2025-11-27T11:00:00Z"
    }
  ]
}
```

---

### 5. Get User's Community Requests
Retrieve all community requests submitted by a specific user.

**Endpoint:** `GET /communities/requests/user/:userId`

**URL Parameters:**
- `userId` - User ID

**Success Response (200):**
```json
{
  "status": 200,
  "message": "User community requests retrieved successfully",
  "data": [
    {
      "id": "request-uuid",
      "name": "Tech Enthusiasts Lagos",
      "status": "APPROVED",
      "communityId": "community-uuid",
      "createdAt": "2025-11-27T12:00:00Z"
    },
    {
      "id": "request-uuid-2",
      "name": "Gaming Squad",
      "status": "PENDING",
      "createdAt": "2025-11-27T13:00:00Z"
    }
  ]
}
```

---

## Community Endpoints

### 6. Get All Communities
Retrieve all active communities with optional name filter.

**Endpoint:** `GET /communities?name={search_term}`

**Query Parameters:**
- `name` (optional) - Filter communities by name (case-insensitive)

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Communities retrieved successfully",
  "data": [
    {
      "id": "community-uuid-1",
      "name": "Ikeja, Lagos",
      "description": "Official community for Ikeja Local Government Area...",
      "location": "Ikeja, Lagos, Nigeria",
      "state": "Lagos",
      "lga": "Ikeja",
      "communityType": "SYSTEM_LGA",
      "status": "ACTIVE",
      "membersCount": 1523,
      "createdAt": "2025-11-27T10:00:00Z"
    },
    {
      "id": "community-uuid-2",
      "name": "Tech Enthusiasts Lagos",
      "description": "A community for tech lovers",
      "communityType": "USER_CREATED",
      "status": "ACTIVE",
      "membersCount": 45,
      "createdBy": "user-uuid",
      "createdAt": "2025-11-27T12:00:00Z"
    }
  ]
}
```

---

### 7. Get Community By ID
Retrieve detailed information about a specific community.

**Endpoint:** `GET /communities/:id`

**URL Parameters:**
- `id` - Community ID

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Community retrieved successfully",
  "data": {
    "id": "community-uuid",
    "name": "Ikeja, Lagos",
    "description": "Official community for Ikeja Local Government Area...",
    "location": "Ikeja, Lagos, Nigeria",
    "state": "Lagos",
    "lga": "Ikeja",
    "communityType": "SYSTEM_LGA",
    "status": "ACTIVE",
    "createdBy": "SYSTEM",
    "members": [
      {
        "userId": "user-uuid-1",
        "role": "MEMBER",
        "joinedAt": "2025-11-27T10:00:00Z"
      },
      {
        "userId": "user-uuid-2",
        "role": "ADMIN",
        "joinedAt": "2025-11-27T11:00:00Z"
      }
    ]
  }
}
```

---

## Member Management Endpoints

### 8. Request to Join Community
Submit a request to join a community. Auto-approved for SYSTEM_LGA communities, requires admin approval for USER_CREATED communities.

**Endpoint:** `POST /communities/join` or `POST /communities/:id/join/request`

**Request Body:**
```json
{
  "user_id": "user-uuid",
  "community_id": "community-uuid"
}
```

**Success Response (200) - Auto-Approved:**
```json
{
  "status": 200,
  "message": "You have successfully joined the community",
  "data": {
    "id": "membership-uuid",
    "userId": "user-uuid",
    "communityId": "community-uuid",
    "role": "MEMBER",
    "status": "APPROVED",
    "joinedAt": "2025-11-27T12:00:00Z"
  }
}
```

**Success Response (200) - Pending Approval:**
```json
{
  "status": 200,
  "message": "Join request submitted. Please wait for admin approval.",
  "data": {
    "id": "membership-uuid",
    "userId": "user-uuid",
    "communityId": "community-uuid",
    "role": "MEMBER",
    "status": "PENDING",
    "requestedAt": "2025-11-27T12:00:00Z"
  }
}
```

**Error Response (400):**
```json
{
  "status": 400,
  "message": "You are already a member of this community"
}
```

---

### 9. Get Pending Join Requests (Community Admin Only)
Retrieve all pending join requests for a community.

**Endpoint:** `GET /communities/:id/members/pending?adminId={admin_user_id}`

**URL Parameters:**
- `id` - Community ID

**Query Parameters:**
- `adminId` (required) - Admin user ID for authorization

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Pending join requests retrieved successfully",
  "data": [
    {
      "id": "membership-uuid-1",
      "userId": "user-uuid-1",
      "communityId": "community-uuid",
      "status": "PENDING",
      "requestedAt": "2025-11-27T12:00:00Z"
    },
    {
      "id": "membership-uuid-2",
      "userId": "user-uuid-2",
      "communityId": "community-uuid",
      "status": "PENDING",
      "requestedAt": "2025-11-27T11:30:00Z"
    }
  ]
}
```

---

### 10. Approve Member Join Request (Community Admin Only)
Approve a pending join request.

**Endpoint:** `POST /communities/:id/members/:userId/approve`

**URL Parameters:**
- `id` - Community ID
- `userId` - User ID to approve

**Request Body:**
```json
{
  "adminId": "admin-user-uuid"
}
```

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Member request approved successfully",
  "data": {
    "id": "membership-uuid",
    "userId": "user-uuid",
    "communityId": "community-uuid",
    "status": "APPROVED",
    "joinedAt": "2025-11-27T12:00:00Z"
  }
}
```

---

### 11. Reject Member Join Request (Community Admin Only)
Reject a pending join request.

**Endpoint:** `POST /communities/:id/members/:userId/reject`

**URL Parameters:**
- `id` - Community ID
- `userId` - User ID to reject

**Request Body:**
```json
{
  "adminId": "admin-user-uuid"
}
```

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Member request rejected",
  "data": {
    "id": "membership-uuid",
    "userId": "user-uuid",
    "communityId": "community-uuid",
    "status": "REJECTED"
  }
}
```

---

### 12. Get User Communities
Retrieve all communities a user is a member of.

**Endpoint:** `GET /communities/user/:userId/memberships`

**URL Parameters:**
- `userId` - User ID

**Success Response (200):**
```json
{
  "status": 200,
  "message": "User communities retrieved successfully",
  "data": [
    {
      "id": "membership-uuid-1",
      "userId": "user-uuid",
      "role": "ADMIN",
      "status": "APPROVED",
      "joinedAt": "2025-11-27T10:00:00Z",
      "community": {
        "id": "community-uuid-1",
        "name": "Tech Enthusiasts Lagos",
        "communityType": "USER_CREATED"
      }
    },
    {
      "id": "membership-uuid-2",
      "userId": "user-uuid",
      "role": "MEMBER",
      "status": "APPROVED",
      "joinedAt": "2025-11-27T11:00:00Z",
      "community": {
        "id": "community-uuid-2",
        "name": "Ikeja, Lagos",
        "communityType": "SYSTEM_LGA"
      }
    }
  ]
}
```

---

### 13. Remove Member from Community (Community Admin Only)
Remove a member from the community.

**Endpoint:** `DELETE /communities/:id/members/:userId`

**URL Parameters:**
- `id` - Community ID
- `userId` - User ID to remove

**Request Body:**
```json
{
  "adminId": "admin-user-uuid"
}
```

**Success Response (200):**
```json
{
  "status": 200,
  "message": "Member removed successfully"
}
```

---

## Post Endpoints

### 14. Create Post
Create a new post in a community. User must be an approved member.

**Endpoint:** `POST /posts/create`

**Request Body:**
```json
{
  "community_id": "community-uuid",
  "title": "Welcome to the community!",
  "category": "General",
  "description": "Excited to be here and connect with everyone.",
  "user_id": "user-uuid",
  "media_url": "https://cloudinary.com/image.jpg" // optional
}
```

**Success Response (201):**
```json
{
  "status": 201,
  "message": "Post created successfully"
}
```

**Error Response (400):**
```json
{
  "status": 400,
  "message": "You must be an approved member of the community to create posts"
}
```

---

## Setup & Seeding

### Running the Database Migration
```bash
npx prisma migrate dev --name add_community_system
```

### Seeding Nigerian LGA Communities
```bash
npm run seed:communities
```

This will create 774 communities (one for each LGA in Nigeria) with:
- Community type: `SYSTEM_LGA`
- Status: `ACTIVE`
- Auto-approve join requests

---

## Community Types

### SYSTEM_LGA
- Pre-created for all Nigerian LGAs
- Auto-approve join requests
- Cannot be deleted
- Meant for location-based community building

### USER_CREATED
- Created through approval workflow
- Require admin approval for join requests
- Creator becomes admin automatically
- Can have custom names and descriptions

---

## Status Values

### Community Status
- `ACTIVE` - Community is active and visible
- `PENDING` - Waiting for approval (user-created only)
- `REJECTED` - Request was rejected
- `ARCHIVED` - Community is archived

### Request Status
- `PENDING` - Waiting for admin review
- `APPROVED` - Request approved, community created
- `REJECTED` - Request rejected

### Member Status
- `PENDING` - Waiting for admin approval
- `APPROVED` - Member can post and interact
- `REJECTED` - Join request rejected

---

## Error Codes

- `200` - Success
- `201` - Created successfully
- `400` - Bad request / Validation error
- `401` - Unauthorized
- `403` - Forbidden (insufficient permissions)
- `404` - Resource not found
- `409` - Conflict (duplicate resource)
- `500` - Internal server error
