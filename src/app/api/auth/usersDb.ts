export interface UserRecord {
    email: string;
    password: string;
    role?: string;
}

export const usersDB: UserRecord[] = [
    { email: "admin@example.com", password: "adminpass", role: "admin" }
];
