"use client";

import { MessageRow } from "@/app/schemas/message";
import { MessageItem } from "./message/MessageItem";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useParams } from "next/navigation";

const messages = [
  {
    id: 1,
    message: "Hello how are u",
    date: new Date(),
    avatar: "https://avatars.githubusercontent.com/u/194279381?v=4",
    userName: "Zefnir",
  },
];

export function MessageList() {
  const [message, setMessage] = useState<MessageRow[]>([]);
  const params = useParams();

  const fetchMessage = useCallback(async () => {
    const { data, error } = await supabase
      .from("message")
      .select("*")
      .eq("channel_Id", params.channelId);

    setMessage(data ?? []);
  }, [params.channelId]);

  useEffect(() => {
    Promise.resolve().then(fetchMessage);
  }, [fetchMessage]);

  return (
    <div className="relative w-full">
      <div className="h-screen overflow-y-auto px-4">
        {message.map((message) => (
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
