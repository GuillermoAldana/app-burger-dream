export interface IUser {
    uid?: string;
    name?: string;
    email: string;
    password: string;

}
export interface IUserLogin {
    uid?: string;
    name?: string;
    email?: string | null;
}
export interface UserAuth {
    email: string;
    password: string;
}
