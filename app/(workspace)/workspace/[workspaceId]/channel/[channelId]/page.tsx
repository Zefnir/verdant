"use client";

import { MessageRow } from "@/app/schemas/message";
import { ChannelHeader } from "./_components/ChannelHeader";
import { MessageInputForm } from "./_components/message/MessageInputForm";
import { MessageList } from "./_components/MessageList";
import { createContext, useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

interface iMessageContext {
  data: MessageRow[];
  refresh: () => Promise<void>;
}

export const MessageContext = createContext<iMessageContext | null>(null);

const ChannelPageMain = () => {
  const [message, setMessage] = useState<MessageRow[]>([]);
  const params = useParams();

  const fetchMessage = useCallback(async () => {
    const { data } = await supabase
      .from("message")
      .select("*")
      .eq("channel_Id", params.channelId)
      .order("created_at", { ascending: true });

    setMessage(data ?? []);
  }, [params.channelId]);
  console.log("sfdasefea", message);

  useEffect(() => {
    Promise.resolve().then(fetchMessage);
  }, [fetchMessage]);

  useEffect(() => {
    if (!params.channelId) return;

    console.log("Subscribing to realtime for:", params.channelId);

    const channel = supabase.channel(`realtime-channel-${params.channelId}`).on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "message",
      },
      (payload) => {
        setMessage((prev) => {
          if (prev.some((msg) => msg.id === payload.new.id)) {
            return prev;
          }
          return [...prev, payload.new as MessageRow];
        });
      },
    );

    return () => {
      supabase.removeChannel(channel);
    };
  }, [params.channelId]);

  return (
    <div className="flex h-screen w-full bg-sidebar">
      {/* Main channel area */}
      <div className="flex flex-col flex-1 min-w-0">
        <ChannelHeader />
        {/* Scrollable Message Area */}
        <div className="flex overflow-hidden h-full">
          <MessageList messages={message} />
        </div>
        <div className="border-t px-4">
          <MessageContext.Provider
            value={{ data: message, refresh: fetchMessage }}
          >
            <MessageInputForm />
          </MessageContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ChannelPageMain;
