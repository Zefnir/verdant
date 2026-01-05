import { convertJsonToHtml } from "@/lib/json-to-html";
import { type JSONContent } from "@tiptap/react";
import parse from "html-react-parser";

interface iMessageJson {
  content: JSONContent;
  className?: string;
}

export function SafeContent({ content, className }: iMessageJson) {
  const html = convertJsonToHtml(content);

  return <div className={className}>{parse(html)}</div>;
}
