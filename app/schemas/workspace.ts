import { z } from "zod";

export const workspaceSchema = z.object({
  name: z
    .string()
    .min(3, "Workspace name must be at least 2 characters")
    .max(20, "Workspace name must not exceed 20 characters"),
});

export type WorkspaceSchemaType = z.infer<typeof workspaceSchema>;

export type Workspace = {
  id: string;
  name: string;
};
