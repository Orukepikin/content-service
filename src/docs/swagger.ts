import type { OpenAPIV3 } from 'openapi-types';

const uuidParam = (name: string, description: string): OpenAPIV3.ParameterObject => ({
  in: 'path',
  name,
  required: true,
  description,
  schema: { type: 'string', format: 'uuid' }
});

const queryParam = (
  name: string,
  description: string,
  schema: OpenAPIV3.SchemaObject,
  required = false
): OpenAPIV3.ParameterObject => ({
  in: 'query',
  name,
  required,
  description,
  schema
});

const paginationQueryParams: OpenAPIV3.ParameterObject[] = [
  queryParam('page', 'Page number (>= 1)', { type: 'integer', minimum: 1, default: 1 }),
  queryParam('limit', 'Items per page (>= 1)', { type: 'integer', minimum: 1, default: 10 })
];

const buildStandardResponse = (
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
): OpenAPIV3.ResponseObject => ({
  description: 'Successful response',
  content: {
    'application/json': {
      schema
    }
  }
});

const postPaths: OpenAPIV3.PathsObject = {
  '/posts/create': {
    post: {
      tags: ['Posts'],
      summary: 'Create a new post',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/CreatePostPayload' },
            example: {
              community_id: '15b0e6c1-8ed0-4c72-b43b-82e8a5d0d8d3',
              title: 'Need volunteers',
              category: 'Announcement',
              description: 'Looking for community clean-up volunteers',
              user_id: 'a70ad499-49da-4a6d-9f84-95002725a1ab'
            }
          }
        }
      },
      responses: {
        201: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 201 },
            message: { type: 'string', example: 'Post created successfully' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' },
        409: {
          description: 'Duplicate post title',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              example: { status: 409, message: 'A post with this title already exists' }
            }
          }
        }
      }
    }
  },
  '/posts/community/{id}': {
    get: {
      tags: ['Posts'],
      summary: 'List posts for a community',
      parameters: [uuidParam('id', 'Community identifier')],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            data: { type: 'array', items: { $ref: '#/components/schemas/Post' } }
          }
        })
      }
    }
  },
  '/posts': {
    get: {
      tags: ['Posts'],
      summary: 'List all posts',
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            data: { type: 'array', items: { $ref: '#/components/schemas/Post' } }
          }
        })
      }
    }
  },
  '/posts/{post_id}': {
    get: {
      tags: ['Posts'],
      summary: 'Get post by id',
      parameters: [uuidParam('post_id', 'Post identifier')],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            data: { $ref: '#/components/schemas/Post' }
          }
        }),
        404: { $ref: '#/components/responses/NotFound' }
      }
    }
  },
  '/posts/{post_id}/update': {
    put: {
      tags: ['Posts'],
      summary: 'Update a post',
      parameters: [uuidParam('post_id', 'Post identifier')],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/UpdatePostPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Post updated successfully' },
            data: { $ref: '#/components/schemas/Post' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  },
  '/posts/{post_id}/delete': {
    delete: {
      tags: ['Posts'],
      summary: 'Delete a post',
      parameters: [uuidParam('post_id', 'Post identifier')],
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/MessageResponse' })
      }
    }
  },
  '/posts/count/{user_id}': {
    get: {
      tags: ['Posts'],
      summary: 'Count posts created by a user',
      parameters: [uuidParam('user_id', 'Author identifier')],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'success' },
            userId: { type: 'string', format: 'uuid' },
            count: { type: 'integer', example: 4 }
          }
        })
      }
    }
  },
  '/posts/search': {
    post: {
      tags: ['Posts'],
      summary: 'Search posts by keyword',
      parameters: [queryParam('query', 'Case-insensitive term used to search title/description/category', { type: 'string', minLength: 1 }, true)],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            data: { type: 'array', items: { $ref: '#/components/schemas/Post' } }
          }
        }),
        400: {
          description: 'Invalid search query',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              example: { status: 400, message: 'Invalid search query' }
            }
          }
        }
      }
    }
  }
};

const commentPaths: OpenAPIV3.PathsObject = {
  '/comments/add': {
    post: {
      tags: ['Comments'],
      summary: 'Add a comment to a post',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/AddCommentPayload' }
          }
        }
      },
      responses: {
        201: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 201 },
            message: { type: 'string', example: 'Comment added successfully' },
            data: { $ref: '#/components/schemas/Comment' }
          }
        })
      }
    }
  },
  '/comments/{comment_id}/delete': {
    delete: {
      tags: ['Comments'],
      summary: 'Delete a comment',
      parameters: [uuidParam('comment_id', 'Comment identifier')],
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/MessageResponse' })
      }
    }
  },
  '/comments/post/{post_id}': {
    get: {
      tags: ['Comments'],
      summary: 'List comments for a post',
      parameters: [uuidParam('post_id', 'Post identifier')],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            data: { type: 'array', items: { $ref: '#/components/schemas/Comment' } }
          }
        })
      }
    }
  }
};

const likePaths: OpenAPIV3.PathsObject = {
  '/posts/like': {
    post: {
      tags: ['Likes'],
      summary: 'Toggle like on a post',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/LikePostPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Like toggled' },
            data: { type: 'object' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  },
  '/comments/like': {
    post: {
      tags: ['Likes'],
      summary: 'Toggle like on a comment',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/LikeCommentPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Like toggled' },
            data: { type: 'object' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  },
  '/posts/{post_id}/likes/count': {
    get: {
      tags: ['Likes'],
      summary: 'Get like count for a post',
      parameters: [uuidParam('post_id', 'Post identifier')],
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/LikeCountResponse' })
      }
    }
  },
  '/comments/{comment_id}/likes/count': {
    get: {
      tags: ['Likes'],
      summary: 'Get like count for a comment',
      parameters: [uuidParam('comment_id', 'Comment identifier')],
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/LikeCountResponse' })
      }
    }
  }
};

const communityRequestPaths: OpenAPIV3.PathsObject = {
  '/communities/request': {
    post: {
      tags: ['Community Requests'],
      summary: 'Submit a community creation request',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/CreateCommunityRequestPayload' }
          }
        }
      },
      responses: {
        201: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 201 },
            message: {
              type: 'string',
              example: 'Community request submitted successfully. Please wait for admin approval.'
            },
            data: { $ref: '#/components/schemas/CommunityRequest' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  },
  '/communities/requests/{id}/approve': {
    post: {
      tags: ['Community Requests'],
      summary: 'Approve a pending community request',
      parameters: [uuidParam('id', 'Community request identifier')],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/ApproveCommunityRequestPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Community request approved successfully' },
            data: { $ref: '#/components/schemas/Community' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' },
        404: { $ref: '#/components/responses/NotFound' }
      }
    }
  },
  '/communities/requests/{id}/reject': {
    post: {
      tags: ['Community Requests'],
      summary: 'Reject a community request',
      parameters: [uuidParam('id', 'Community request identifier')],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/RejectCommunityRequestPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Community request rejected' },
            data: { $ref: '#/components/schemas/CommunityRequest' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' },
        404: { $ref: '#/components/responses/NotFound' }
      }
    }
  },
  '/communities/requests/pending': {
    get: {
      tags: ['Community Requests'],
      summary: 'List pending community requests',
      parameters: paginationQueryParams,
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/PaginatedCommunityRequestResponse' })
      }
    }
  },
  '/communities/requests/user/{userId}': {
    get: {
      tags: ['Community Requests'],
      summary: 'List requests submitted by a user',
      parameters: [uuidParam('userId', 'User identifier')],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'User community requests retrieved successfully' },
            data: { type: 'array', items: { $ref: '#/components/schemas/CommunityRequest' } }
          }
        })
      }
    }
  }
};

const communityPaths: OpenAPIV3.PathsObject = {
  '/communities/create': {
    post: {
      tags: ['Communities'],
      summary: 'Legacy community creation (disabled)',
      responses: {
        400: {
          description: 'Direct creation disabled',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              example: {
                status: 400,
                message: 'Direct community creation is no longer supported. Please use /communities/request.'
              }
            }
          }
        }
      }
    }
  },
  '/communities/{id}': {
    get: {
      tags: ['Communities'],
      summary: 'Get community details',
      parameters: [uuidParam('id', 'Community identifier')],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Community retrieved successfully' },
            data: { $ref: '#/components/schemas/Community' }
          }
        }),
        404: { $ref: '#/components/responses/NotFound' }
      }
    }
  },
  '/communities': {
    get: {
      tags: ['Communities'],
      summary: 'List communities (optional filter)',
      parameters: [queryParam('name', 'Case-insensitive partial name search', { type: 'string', minLength: 1 })],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Communities retrieved successfully' },
            data: { type: 'array', items: { $ref: '#/components/schemas/Community' } }
          }
        })
      }
    }
  },
  '/communities/join': {
    post: {
      tags: ['Members'],
      summary: 'Submit join request (auto routing)',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/JoinCommunityPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Join request submitted. Please wait for admin approval.' },
            data: {
              type: 'object',
              properties: {
                status: { type: 'string', example: 'PENDING' }
              }
            }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  },
  '/communities/{id}/join/request': {
    post: {
      tags: ['Members'],
      summary: 'Submit join request to specific community',
      parameters: [uuidParam('id', 'Community identifier')],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['user_id'],
              properties: {
                user_id: { type: 'string', format: 'uuid' }
              }
            }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Join request submitted. Please wait for admin approval.' },
            data: {
              type: 'object',
              properties: {
                status: { type: 'string', example: 'PENDING' }
              }
            }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  }
};

const memberPaths: OpenAPIV3.PathsObject = {
  '/communities/{id}/members/pending': {
    get: {
      tags: ['Members'],
      summary: 'List pending member requests',
      parameters: [
        uuidParam('id', 'Community identifier'),
        queryParam('adminId', 'Admin performing the lookup', { type: 'string', format: 'uuid' }, true)
      ],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Pending join requests retrieved successfully' },
            data: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  userId: { type: 'string', format: 'uuid' },
                  status: { type: 'string', example: 'PENDING' }
                }
              }
            }
          }
        }),
        400: {
          description: 'adminId missing',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              example: { status: 400, message: 'adminId query parameter is required' }
            }
          }
        }
      }
    }
  },
  '/communities/{id}/members/{userId}/approve': {
    post: {
      tags: ['Members'],
      summary: 'Approve a member request',
      parameters: [uuidParam('id', 'Community identifier'), uuidParam('userId', 'User identifier')],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/ApproveMemberPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Member request approved successfully' },
            data: { type: 'object' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  },
  '/communities/{id}/members/{userId}/reject': {
    post: {
      tags: ['Members'],
      summary: 'Reject a member request',
      parameters: [uuidParam('id', 'Community identifier'), uuidParam('userId', 'User identifier')],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/ApproveMemberPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/MessageResponse' }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  },
  '/communities/{id}/members/{userId}': {
    delete: {
      tags: ['Members'],
      summary: 'Remove a community member',
      parameters: [uuidParam('id', 'Community identifier'), uuidParam('userId', 'User identifier')],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/RemoveMemberPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/MessageResponse' }),
        400: {
          description: 'Missing adminId',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              example: { status: 400, message: 'adminId is required in request body' }
            }
          }
        }
      }
    }
  },
  '/communities/user/{userId}/memberships': {
    get: {
      tags: ['Members'],
      summary: 'List communities a user belongs to',
      parameters: [uuidParam('userId', 'User identifier')],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'User communities retrieved successfully' },
            data: { type: 'array', items: { $ref: '#/components/schemas/Community' } }
          }
        })
      }
    }
  }
};

const mediaPaths: OpenAPIV3.PathsObject = {
  '/media/upload': {
    post: {
      tags: ['Media'],
      summary: 'Upload an image asset',
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                file: { type: 'string', format: 'binary', description: 'Image file to upload' }
              }
            }
          }
        }
      },
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/UploadMediaResponse' }),
        400: {
          description: 'Invalid upload',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              examples: {
                missingFile: { value: { status: 400, message: 'No file uploaded' } },
                invalidType: { value: { status: 400, message: 'Only image files are allowed' } }
              }
            }
          }
        }
      }
    }
  }
};

const eventPaths: OpenAPIV3.PathsObject = {
  '/events/create': {
    post: {
      tags: ['Events'],
      summary: 'Create a new event',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/CreateEventPayload' }
          }
        }
      },
      responses: {
        201: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 201 },
            message: { type: 'string', example: 'Event created successfully' },
            data: { $ref: '#/components/schemas/Event' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    }
  },
  '/events/{id}': {
    get: {
      tags: ['Events'],
      summary: 'Get an event by id',
      parameters: [uuidParam('id', 'Event identifier')],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Event retrieved successfully' },
            data: { $ref: '#/components/schemas/Event' }
          }
        }),
        404: { $ref: '#/components/responses/NotFound' }
      }
    },
    put: {
      tags: ['Events'],
      summary: 'Update an event',
      parameters: [uuidParam('id', 'Event identifier')],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/UpdateEventPayload' }
          }
        }
      },
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Event updated successfully' },
            data: { $ref: '#/components/schemas/Event' }
          }
        }),
        400: { $ref: '#/components/responses/ValidationError' }
      }
    },
    delete: {
      tags: ['Events'],
      summary: 'Delete an event',
      parameters: [uuidParam('id', 'Event identifier')],
      responses: {
        200: buildStandardResponse({ $ref: '#/components/schemas/MessageResponse' })
      }
    }
  },
  '/events/getAll': {
    get: {
      tags: ['Events'],
      summary: 'List events (optional title filter)',
      parameters: [queryParam('title', 'Case-insensitive title filter', { type: 'string', minLength: 1 })],
      responses: {
        200: buildStandardResponse({
          type: 'object',
          properties: {
            status: { type: 'integer', example: 200 },
            message: { type: 'string', example: 'Events retrieved successfully' },
            data: { type: 'array', items: { $ref: '#/components/schemas/Event' } }
          }
        })
      }
    }
  }
};

const swaggerDocument: OpenAPIV3.Document = {
  openapi: '3.0.1',
  info: {
    title: 'Content Service API',
    version: '1.0.0',
    description:
      'Comprehensive reference for every content-service endpoint, including payload schemas, success responses, and validation errors.'
  },
  servers: [
    {
      url: 'https://global-root-content-service-5c3e9b9bf3e2.herokuapp.com',
      description: 'Production base path'
    }
  ],
  tags: [
    { name: 'Posts', description: 'Create and manage posts' },
    { name: 'Comments', description: 'Comment CRUD and retrieval' },
    { name: 'Likes', description: 'Like/unlike posts and comments' },
    { name: 'Media', description: 'Media upload utilities' },
    { name: 'Community Requests', description: 'Community creation request workflow' },
    { name: 'Communities', description: 'Community browsing and legacy helpers' },
    { name: 'Members', description: 'Membership request and moderation' },
    { name: 'Events', description: 'Community event lifecycle' }
  ],
  components: {
    schemas: {
      ErrorResponse: {
        type: 'object',
        properties: {
          status: { type: 'integer', example: 400 },
          message: { type: 'string', example: 'Validation failed' }
        }
      },
      MessageResponse: {
        type: 'object',
        properties: {
          status: { type: 'integer', example: 200 },
          message: { type: 'string', example: 'Operation successful' }
        }
      },
      PaginatedCommunityRequestResponse: {
        type: 'object',
        properties: {
          status: { type: 'integer', example: 200 },
          message: { type: 'string', example: 'Pending community requests retrieved successfully' },
          data: {
            type: 'object',
            properties: {
              items: { type: 'array', items: { $ref: '#/components/schemas/CommunityRequest' } },
              pagination: {
                type: 'object',
                properties: {
                  page: { type: 'integer', example: 1 },
                  pageSize: { type: 'integer', example: 10 },
                  total: { type: 'integer', example: 25 }
                }
              }
            }
          }
        }
      },
      CommunityRequest: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          description: { type: 'string', nullable: true },
          location: { type: 'string', nullable: true },
          state: { type: 'string', nullable: true },
          lga: { type: 'string', nullable: true },
          status: { type: 'string', enum: ['PENDING', 'APPROVED', 'REJECTED'] },
          requestedBy: { type: 'string', format: 'uuid' },
          createdAt: { type: 'string', format: 'date-time' }
        }
      },
      Community: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          location: { type: 'string' },
          description: { type: 'string', nullable: true },
          lga: { type: 'string', nullable: true },
          createdAt: { type: 'string', format: 'date-time' }
        }
      },
      CreateCommunityRequestPayload: {
        type: 'object',
        required: ['requestedBy', 'name'],
        properties: {
          requestedBy: { type: 'string', format: 'uuid' },
          name: { type: 'string', minLength: 3, maxLength: 100 },
          location: { type: 'string', nullable: true },
          description: { type: 'string', nullable: true },
          state: { type: 'string', nullable: true },
          lga: { type: 'string', nullable: true }
        }
      },
      ApproveCommunityRequestPayload: {
        type: 'object',
        required: ['approvedBy'],
        properties: {
          approvedBy: { type: 'string', format: 'uuid' }
        }
      },
      RejectCommunityRequestPayload: {
        type: 'object',
        required: ['rejectedBy', 'reason'],
        properties: {
          rejectedBy: { type: 'string', format: 'uuid' },
          reason: { type: 'string', minLength: 10 }
        }
      },
      CreatePostPayload: {
        type: 'object',
        required: ['community_id', 'title', 'category', 'description', 'user_id'],
        properties: {
          community_id: { type: 'string', format: 'uuid' },
          title: { type: 'string' },
          category: { type: 'string' },
          description: { type: 'string' },
          user_id: { type: 'string', format: 'uuid' },
          media_url: { type: 'string', nullable: true }
        }
      },
      Post: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          community_id: { type: 'string', format: 'uuid' },
          title: { type: 'string' },
          category: { type: 'string' },
          description: { type: 'string' },
          user_id: { type: 'string', format: 'uuid' },
          media_url: { type: 'string', nullable: true },
          createdAt: { type: 'string', format: 'date-time' }
        }
      },
      UpdatePostPayload: {
        type: 'object',
        properties: {
          title: { type: 'string', minLength: 3, maxLength: 100 },
          category: { type: 'string', minLength: 3, maxLength: 50 },
          description: { type: 'string', minLength: 10 },
          mediaUrl: { type: 'string', nullable: true }
        }
      },
      AddCommentPayload: {
        type: 'object',
        required: ['post_id', 'user_id', 'content'],
        properties: {
          post_id: { type: 'string', format: 'uuid' },
          user_id: { type: 'string', format: 'uuid' },
          parent_id: { type: 'string', nullable: true },
          content: { type: 'string' }
        }
      },
      Comment: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          post_id: { type: 'string', format: 'uuid' },
          user_id: { type: 'string', format: 'uuid' },
          content: { type: 'string' },
          parent_id: { type: 'string', nullable: true },
          createdAt: { type: 'string', format: 'date-time' }
        }
      },
      LikePostPayload: {
        type: 'object',
        required: ['user_id', 'post_id'],
        properties: {
          user_id: { type: 'string', format: 'uuid' },
          post_id: { type: 'string', format: 'uuid' }
        }
      },
      LikeCommentPayload: {
        type: 'object',
        required: ['user_id', 'comment_id'],
        properties: {
          user_id: { type: 'string', format: 'uuid' },
          comment_id: { type: 'string', format: 'uuid' }
        }
      },
      JoinCommunityPayload: {
        type: 'object',
        required: ['user_id', 'community_id'],
        properties: {
          user_id: { type: 'string', format: 'uuid' },
          community_id: { type: 'string', format: 'uuid' }
        }
      },
      ApproveMemberPayload: {
        type: 'object',
        required: ['adminId'],
        properties: {
          adminId: { type: 'string', format: 'uuid' }
        }
      },
      RemoveMemberPayload: {
        type: 'object',
        required: ['adminId'],
        properties: {
          adminId: { type: 'string', format: 'uuid' }
        }
      },
      CreateEventPayload: {
        type: 'object',
        required: ['title', 'startDate', 'endDate', 'createdBy'],
        properties: {
          title: { type: 'string' },
          description: { type: 'string', nullable: true },
          location: { type: 'string', nullable: true },
          startDate: { type: 'string', format: 'date-time' },
          endDate: { type: 'string', format: 'date-time' },
          coverImage: { type: 'string', nullable: true },
          createdBy: { type: 'string', format: 'uuid' }
        }
      },
      UpdateEventPayload: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          description: { type: 'string', nullable: true },
          location: { type: 'string', nullable: true },
          startDate: { type: 'string', format: 'date-time', nullable: true },
          endDate: { type: 'string', format: 'date-time', nullable: true },
          coverImage: { type: 'string', nullable: true }
        }
      },
      Event: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          title: { type: 'string' },
          description: { type: 'string' },
          location: { type: 'string' },
          startDate: { type: 'string', format: 'date-time' },
          endDate: { type: 'string', format: 'date-time' },
          coverImage: { type: 'string', nullable: true },
          createdBy: { type: 'string', format: 'uuid' }
        }
      },
      UploadMediaResponse: {
        type: 'object',
        properties: {
          status: { type: 'integer', example: 200 },
          message: { type: 'string', example: 'Media uploaded successfully' },
          url: { type: 'string', format: 'uri' }
        }
      },
      LikeCountResponse: {
        type: 'object',
        properties: {
          status: { type: 'integer', example: 200 },
          data: { type: 'integer', example: 12 }
        }
      }
    },
    responses: {
      ValidationError: {
        description: 'Payload could not be validated',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/ErrorResponse' }
          }
        }
      },
      NotFound: {
        description: 'Requested resource was not found',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/ErrorResponse' }
          }
        }
      }
    }
  },
  paths: {
    ...postPaths,
    ...commentPaths,
    ...likePaths,
    ...communityRequestPaths,
    ...communityPaths,
    ...memberPaths,
    ...mediaPaths,
    ...eventPaths
  }
};

export { swaggerDocument };
export default swaggerDocument;