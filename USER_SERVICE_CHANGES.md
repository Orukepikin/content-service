# User Service Implementation Instructions

**Objective:** Update the User Service to support the new Community System features, including Nigerian location support, Super Admin roles, and Gateway Service integration.

**Context:**
- A **Gateway Service** handles all request routing.
- The **Content Service** has been updated with community features (requests, approvals, members).
- The **User Service** needs to provide user profile data (including location) and authorization roles (Super Admin) to support these features.

---

## 1. Database Schema Changes

Update your Prisma schema (User/Profile model) to include location and role fields.

```prisma
model User {
  // ... existing fields ...
  
  // Location fields for Nigerian LGA matching
  state       String?   // e.g., "Lagos", "Kano"
  lga         String?   // e.g., "Ikeja", "Kano Municipal"
  
  // Admin role
  isSuperAdmin Boolean  @default(false)
  
  // ... rest of fields ...
}
```

> **Action:** Run `npx prisma migrate dev --name add_user_location_and_roles` after updating the schema.

---

## 2. Data Implementation (Nigerian States & LGAs)

You need to serve the list of Nigerian States and LGAs so the frontend can populate dropdowns for user profile updates.

**Create file:** `src/data/nigeria-states-lgas.ts`
(Copy the content below or ask the user to provide the file from Content Service)

```typescript
export const nigeriaData = [
  {
    state: "Abia",
    lgas: [
      "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano",
      "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa",
      "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West",
      "Umuahia North", "Umuahia South", "Umu Nneochi"
    ]
  },
  // ... (Full list of 37 states and 774 LGAs should be populated here)
  // If you don't have the full list, ask the user to copy it from:
  // content-service/src/data/nigeria-states-lgas.ts
];
```

---

## 3. New API Endpoints

Implement the following endpoints. The Gateway Service will route requests to these paths.

### A. Location Data Endpoints
*Used by frontend for dropdowns*

`GET /api/location/states`
- Returns list of all states.

`GET /api/location/states/:state/lgas`
- Returns list of LGAs for a specific state.

### B. User Profile Endpoints
*Used by frontend and Content Service*

`GET /api/users/:userId/profile`
- **Must include:** `state`, `lga`, `isSuperAdmin` in the response.

`PUT /api/users/:userId/location`
- **Body:** `{ "state": "Lagos", "lga": "Ikeja" }`
- Updates user's location.

### C. Admin Management Endpoints
*Used by Super Admins*

`GET /api/users/super-admins`
- Returns list of all users with `isSuperAdmin: true`.

`PUT /api/users/:userId/super-admin`
- **Body:** `{ "isSuperAdmin": true }`
- Updates user's super admin status.

---

## 4. Authentication & Gateway Integration

Since a Gateway Service is used:
1.  **Trust the Gateway:** Ensure your service accepts requests forwarded by the Gateway.
2.  **Auth Headers:** The Gateway likely passes the authenticated user's ID or token in headers (e.g., `X-User-Id` or `Authorization`).
3.  **Internal Communication:** If Content Service needs to verify a user (e.g., check `isSuperAdmin`), it will call `GET /api/users/:userId/profile` via the Gateway or internal network. Ensure this endpoint is performant.

---

## 5. Verification Checklist

- [ ] Schema updated with `state`, `lga`, `isSuperAdmin`.
- [ ] Migration run successfully.
- [ ] `nigeria-states-lgas.ts` data file created.
- [ ] Endpoint `GET /api/location/states` returns states.
- [ ] Endpoint `PUT /api/users/:userId/location` updates DB.
- [ ] Endpoint `GET /api/users/:userId/profile` returns new fields.
- [ ] Super Admin endpoints implemented.

---

**Note to AI:** The Content Service is already fully implemented. Your task is strictly to update the User Service to match these requirements so the two services can interoperate correctly within the Gateway architecture.
