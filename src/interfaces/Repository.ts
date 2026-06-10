export interface Repository {
    id: number;
    name: string;
    descripction: string;
    language: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}