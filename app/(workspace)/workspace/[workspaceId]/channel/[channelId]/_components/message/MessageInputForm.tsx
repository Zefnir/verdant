"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { MessageComposer } from "./MessageComposer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createMessageSchema,
  CreateMessageSchemaType,
} from "@/app/schemas/message";
import { ChangeEvent, useContext, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { MessageContext } from "../../page";
import { useAuth } from "@/app/provider/useAuth";

export function MessageInputForm() {
  const params = useParams<{ channelId: string }>();
  const messageContext = useContext(MessageContext);
  const [editorKey, setEditorKey] = useState(0);
  const { user } = useAuth();
  const [image, setImage] = useState<File | null>(null);

  const form = useForm({
    resolver: zodResolver(createMessageSchema),
    defaultValues: {
      content: "",
      channel_Id: params.channelId ?? "",
      author_name: "Zefnir",
      author_avatar:
        "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const filePath = `${file.name}-${crypto.randomUUID()}`;
    const { error } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (error) {
      console.error("Upload failed:", error.message);
      return null;
    }

    const { data } = supabase.storage.from("images").getPublicUrl(filePath);

    return data.publicUrl;
  };

  async function onSubmit(data: CreateMessageSchemaType) {
    if (!params.channelId) {
      console.error("No Channel Id in URL");
      return;
    }
    console.log("CTX", user);

    let imageUrl: string | null = null;
    if (image) {
      imageUrl = await uploadImage(image);
    }

    const payload = {
      content: data.content,
      channel_Id: params.channelId,
      author_name: user?.user_metadata.full_name ?? "John Doe",
      author_avatar: user?.user_metadata.avatar_url,
      created_at: new Date(),
      updated_at: new Date(),
      image_url: imageUrl,
    };

    console.log("They la data: ", data);

    const { error } = await supabase.from("message").insert(payload);

    if (error) {
      console.log("Error creating message");
    }
    messageContext?.refresh();
    form.reset();
    setEditorKey((prev) => prev + 1);
  }


  return (
    <Form {...form}>
      <form id="message-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <MessageComposer
                  key={editorKey}
                  value={field.value}
                  onChange={field.onChange}
                  isSubmitting={false}
                  handleFileChange={handleFileChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
