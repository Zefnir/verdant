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
import { useContext, useState } from "react";
import { useParams } from "next/navigation";
import { channel } from "diagnostics_channel";
import { supabase } from "@/lib/supabase/client";
import { MessageContext } from "../../page";

export function MessageInputForm() {
  const params = useParams<{ channelId: string }>();
  const messageContext = useContext(MessageContext);
  const [editorKey, setEditorKey] = useState(0);
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
    console.log("CTX", messageContext);

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
