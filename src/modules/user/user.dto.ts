export type UserDTO = {

    id?: number;
    name: string;
    email: string;
    password: string;
};

export type UserUpdateDTO = {

    name?: string;
    email?: string;
    password?: string;
};