import { z } from "zod";

export function transformChannelName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export const channelSchema = z.object({
  name: z
    .string()
    .min(3, "Channel name must be at least 2 characters")
    .max(50, "Channel name must not exceed 50 characters")
    .transform((name, ctx) => {
      const transformed = transformChannelName(name);

      if (transformed.length < 3) {
        ctx.addIssue({
          code: "custom",
          message:
            "Channel must be at least 3 characters even after transformation",
        });
        return z.NEVER;
      }

      return transformed;
    }),
  workspace_Id: z.string().min(3).max(100),
});

export type ChannelSchemaType = z.infer<typeof channelSchema>;

export type Channel = {
  id: string;
  workspaceId: string;
  name: string;
};
