import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

//This allows React components to fetch workspaces dynamically when rendering.
export const useGetWorkspaces = ( )=> {
    const data = useQuery(api.workspaces.get);
    const isLoading = (data === undefined);
    return { data, isLoading }
};