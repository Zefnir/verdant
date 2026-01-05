import z from "zod";

export const createMessageSchema = z.object({
  channelId: z.string(),
  content: z.string(),
  author_name: z.string(),
  author_avatar: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const updateMessageSchema = z.object({
  messageId: z.string(),
  content: z.string(),
});

export type CreateMessageSchemaType = z.infer<typeof createMessageSchema>;
export type updateMessageSchemaType = z.infer<typeof updateMessageSchema>;

export type MessageRow = {
  id: string;
  channel_Id: string;
  content: string;
  author_name: string;
  author_avatar: string;
  created_at: Date;
  updated_at: Date;
};
