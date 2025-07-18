import { useMutation } from "@tanstack/react-query";
import { type UserResponse } from "@/types/use";

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
