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
import { useState } from "react";
import { useParams } from "next/navigation";
import { channel } from "diagnostics_channel";
import { supabase } from "@/lib/supabase/client";

export function MessageInputForm() {
  const params = useParams<{ channelId: string }>();
  const form = useForm({
    resolver: zodResolver(createMessageSchema),
    defaultValues: {
      content: "",
      channelId: params.channelId ?? "",
      author_name: "Zefnir",
      author_avatar:
        "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
      created_at: new Date("2003-05-18T08:32:15Z"),
      updated_at: new Date("2003-05-18T08:32:15Z"),
    },
  });

  async function onSubmit(data: CreateMessageSchemaType) {
    if (!params.channelId) {
      console.error("No Channel Id in URL");
      return;
    }

    const payload = {
      content: data.content,
      channel_Id: params.channelId,
      author_name: "Zefnir",
      author_avatar:
        "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
      created_at: new Date("2003-05-18T08:32:15Z"),
      updated_at: new Date("2003-05-18T08:32:15Z"),
    };

    console.log("They la data: ", data);

    const { error } = await supabase.from("message").insert(payload).single();

    if (error) {
      console.log("Error creating message");
    }

    form.reset({ content: "" });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <MessageComposer
                  value={field.value}
                  onChange={field.onChange}
                  onSubmit={() => onSubmit(form.getValues())}
                  isSubmitting={false}
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
