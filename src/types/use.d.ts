type User = {
    id: { name: string; value: string };
    name: { title: string; first: string; last: string };
    login: { uuid: string; username: string; password: string; salt: string; md5: string; sha1: string; sha256: string };
    phone: string;
    picture: { large: string; medium: string; thumbnail: string };
};

type UserResponse = {
    results: User[];
    info: { seed: string; results: number; page: number; version: string };
};

export type { User, UserResponse };
