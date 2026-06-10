import axios from 'axios';
import { Repository } from '../interfaces/Repository';

const GITHUB_API_BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';
const VITE_GITHUB_API_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

export const fecthRepositories = async (): Promise <Repository[]> => {
    try {
        const response = await axios.get(`${GITHUB_API_BASE_URL}/user/repos`, {
            headers: {
                Authorization: `token ${VITE_GITHUB_API_TOKEN}`
            },
            params: {
                per_page: 100,
                sort: 'created',
                direction: 'desc',
                afilliation: 'owner',
            },
        });
        return response.data as Repository[];
    } catch (error) {
        console.error('Error fectching repositories', error);
        return [];
    }
}