import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'https://global-root-gateway-service-148954d5b992.herokuapp.com/api/v1';
const USER_SERVICE_TOKEN = process.env.USER_SERVICE_TOKEN || '';

export interface UserDetails {
    userId: string;
    showOnlineStatus?: boolean;
    profileVisibility?: boolean;
    allowEmails?: boolean;
    allowPush: boolean;
    fullName?: string;
    email?: string;
    state?: string;
    lga?: string;
}

interface UserApiResponse {
    status: string;
    message: string;
    data: UserDetails;
}

export const fetchUserDetails = async (userId: string, token: string): Promise<UserDetails | null> => {
    try {
        const response = await axios.get<UserApiResponse>(`${USER_SERVICE_URL}/user/get-user-by-id`, {
            params: { id: userId },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.data && response.data.data) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(`Failed to fetch user details for ${userId}:`, error);
        return null;
    }
};

const userCache = new Map<string, UserDetails>();

export const fetchMultipleUserDetails = async (userIds: string[], token: string): Promise<Record<string, UserDetails>> => {
    const uniqueIds = [...new Set(userIds)];
    const userMap: Record<string, UserDetails> = {};

    await Promise.all(
        uniqueIds.map(async (id) => {
            if (userCache.has(id)) {
                userMap[id] = userCache.get(id)!;
                return;
            }

            const user = await fetchUserDetails(id, token);
            if (user) {
                userCache.set(id, user);
                userMap[id] = user;
            }
        })
    );

    return userMap;
};



