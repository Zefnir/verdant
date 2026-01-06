"use client";

import { MessageRow } from "@/app/schemas/message";
import { MessageItem } from "./message/MessageItem";

interface MessageListProps {
  messages: MessageRow[];
}

export function MessageList({ messages }: MessageListProps) {
  console.log("debugggg", messages);
  return (
    <div className="relative w-full">
      <div className="h-screen overflow-y-auto px-4">
        {messages.map((message) => (
          <MessageItem
            message={message.content}
            date={new Date(message.created_at)}
            avatar={message.author_avatar}
            userName={message.author_name}
            key={message.id}
          />
        ))}
      </div>
    </div>
  );
}
