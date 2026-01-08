"use client";

import { MessageRow } from "@/app/schemas/message";
import { MessageItem } from "./message/MessageItem";
import { EmptyState } from "@/components/general/EmptyState";
import { supabase } from "@/lib/supabase/client";
import { useEffect } from "react";

interface MessageListProps {
  messages: MessageRow[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="relative w-full">
      <div className="h-screen overflow-y-auto px-4">
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
            />
          ))
        )}
        {/* {messages.map((message) => (
          <MessageItem
            message={message.content}
            date={new Date(message.created_at)}
            avatar={message.author_avatar}
            userName={message.author_name}
            key={message.id}
          />
        ))} */}
      </div>
    </div>
  );
}
