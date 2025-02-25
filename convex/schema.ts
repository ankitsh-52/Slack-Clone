import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
    ...authTables,
    workspaces: defineTable({   //workspaces table
        name: v.string(),
        userId: v.id("users"),
        joinCode: v.string(),   //A unique string for joining the workspace. This means that every workspace has a unique joinCode (probably a random string or code). Users can enter this code to join the workspace.
    }),
});

export default schema;