import { RichTextEditor } from "@/components/rich-text-editor/Editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, Send } from "lucide-react";
import { ChangeEvent } from "react";

interface iAppProps {
  value: string;
  onChange: (next: string) => void;
  isSubmitting?: boolean;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function MessageComposer({
  value,
  onChange,
  isSubmitting,
  handleFileChange,
}: iAppProps) {
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
        footerLeft={
          <div>
            <Input
              id="imageButton"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="cursor-pointer"
            >
              <label htmlFor="imageButton" className="flex items-center">
                <ImageIcon className="size-4 mr-1" />
                Attach
              </label>
            </Button>
          </div>
        }
      />
    </>
  );
}
