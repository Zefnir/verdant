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
import { createMessageSchema } from "@/app/schemas/message";
import { useState } from "react";

export function MessageInputForm() {
  const [editorKey, setEditorKey] = useState(0);

  const form = useForm({
    resolver: zodResolver(createMessageSchema),
    defaultValues: {
      content: undefined,
    },
  });

  function onSubmit() {
    console.log("message sent");
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
                  key={editorKey}
                  value={field.value}
                  onChange={field.onChange}
                  onSubmit={() => onSubmit()}
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
