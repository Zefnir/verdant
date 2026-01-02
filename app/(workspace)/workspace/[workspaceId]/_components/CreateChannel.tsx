"use client";

import { workspaceSchema, WorkspaceSchemaType } from "@/app/schemas/workspace";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase/client";
import { channelSchema, ChannelSchemaType } from "@/app/schemas/channel";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { WorkspaceContext } from "../../layout";

// type Props = {
//   onCreated: () => void;
// };

export function CreateChannel() {
  const workspace = useContext(WorkspaceContext);
  const params = useParams<{ workspaceId: string }>();

  const currentWorkspace = workspace?.find(
    (item) => item.id === params.workspaceId
  );
  const form = useForm({
    resolver: zodResolver(channelSchema),
    defaultValues: {
      name: "",
      workspace_Id: params.workspaceId ?? currentWorkspace?.id ?? "",
    },
  });

  async function onSubmit(data: ChannelSchemaType) {
    if (!params.workspaceId) {
      console.error("No workspaceId in URL");
      return;
    }

    const payload = {
      name: data.name,
      workspace_Id: params.workspaceId,
    };

    const { error } = await supabase.from("channel").insert(payload).single();
    if (error) {
      console.log("Error creating channel");
    }
    console.log("yeh ngon");
    form.reset();
    // onCreated();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Plus className="size-4" />
          Add Channel
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Channel</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Create new channel to get started!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Channel name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Create Channel</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
