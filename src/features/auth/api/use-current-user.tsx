import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

//This allows the app to know which user is logged in before fetching workspaces.
export const useCurrentUser = () => {
    const data = useQuery(api.users.current);
    const isDataLoading = (data === undefined);

    return { data, isDataLoading };
};