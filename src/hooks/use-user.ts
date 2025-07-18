import { useMutation } from "@tanstack/react-query";

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

const fetchRandomUser = async (): Promise<UserResponse> => {
    const response = await fetch("https://randomuser.me/api/?results=1&nat=us");

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
};

export default function useUser() {
    const {
        mutateAsync: fetchUser,
        data: User,
        isPending: isFetching,
        isError: isFetchingFailed,
    } = useMutation({
        mutationKey: ["user"],
        mutationFn: fetchRandomUser,
    });

    return { fetchUser, User, isFetching, isFetchingFailed };
}
