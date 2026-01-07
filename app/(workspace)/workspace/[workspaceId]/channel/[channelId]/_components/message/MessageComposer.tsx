import { RichTextEditor } from "@/components/rich-text-editor/Editor";
import { Button } from "@/components/ui/button";
import { ImageIcon, Send } from "lucide-react";

interface iAppProps {
  value: string;
  onChange: (next: string) => void;
  isSubmitting?: boolean;
}

export function MessageComposer({ value, onChange, isSubmitting }: iAppProps) {
  return (
    <>
      <RichTextEditor
        field={{ value, onChange }}
        sendButton={
          <Button
            form="message-form"
            disabled={isSubmitting}
            type="submit"
            size="sm"
          >
            <Send className="size-4 mr-1" />
            Send
          </Button>
        }
      />
    </>
  );
}
