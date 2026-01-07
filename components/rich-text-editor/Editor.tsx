/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { editorExtensions } from "./extensions";
import { MenuBar } from "./MenuBar";
import { ReactNode } from "react";

interface iAppProps {
  field: any;
  sendButton: ReactNode;
  footerLeft?: ReactNode;
}

export function RichTextEditor({ field, sendButton, footerLeft }: iAppProps) {
  const editor = useEditor({
    immediatelyRender: false,
    content: (() => {
      if (!field?.value) return "";

      try {
        return JSON.parse(field.value);
      } catch {
        return "";
      }
    })(),
    onUpdate: ({ editor }) => {
      if (field?.onChange) {
        field.onChange(JSON.stringify(editor.getJSON()));
      }
    },
    extensions: editorExtensions,
    editorProps: {
      attributes: {
        class:
          "max-w-none min-h-[125px] max-h-[225px] focus:outline-none p-4 prose dark:prose-invert marker:text-primary",
      },
    },
  });

  return (
    <div className="relative w-full border border-input rounded-lg overflow-hidden  flex flex-col my-4">
      <div className="dark:bg-accent/50">
        <MenuBar editor={editor} />
      </div>
      <EditorContent
        editor={editor}
        className="dark:bg-accent/30 overflow-y-auto"
      />

      <div className="dark:bg-accent/50 flex items-center justify-between gap-2 px-3 py-2 border-t border-input ">
        <div className="min-h-8 flex items-center">{footerLeft}</div>
        <div className="shrink-0">{sendButton}</div>
      </div>
    </div>
  );
}
