"use client";

import { MessageRow } from "@/app/schemas/message";
import { MessageItem } from "./message/MessageItem";
import { EmptyState } from "@/components/general/EmptyState";

interface MessageListProps {
  messages: MessageRow[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="relative w-full">
      <div className="h-full overflow-y-auto px-4 ">
        {messages.length == 0 ? (
          <div className="flex pt-4">
            <EmptyState
              title="No messages yet"
              description="Start the conversation by sending the first message"
              buttonText="Send a message"
              href=""
            />
          </div>
        ) : (
          messages.map((message) => (
            <MessageItem
              message={message.content}
              date={new Date(message.created_at)}
              avatar={message.author_avatar}
              userName={message.author_name}
              key={message.id}
              imageUrl={message.image_url}
            />
          ))
        )}
      </div>
    </div>
  );
}
