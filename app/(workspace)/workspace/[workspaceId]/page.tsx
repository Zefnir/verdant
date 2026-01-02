"use client";
import { useContext, useEffect, useState } from "react";
import { WorkspaceContext } from "../layout";
import { useParams } from "next/navigation";
import { Channel } from "@/app/schemas/channel";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ChannelList = () => {
  const workspace = useContext(WorkspaceContext);
  const params = useParams<{ workspaceId: string }>();
  const [channel, setChannel] = useState<Channel[]>([]);

  useEffect(() => {
    const fetchChannel = async () => {
      const { data, error } = await supabase
        .from("channel")
        .select("*")
        .eq("workspace_Id", params.workspaceId);

      console.log("adasdw", data);

      if (error) {
        console.log("Error fetching channel");
        return;
      }
      setChannel(data ?? []);
    };

    fetchChannel();
  }, [params.workspaceId]);

  return (
    <div>
      {channel.map((item) => (
        <>
          <Link
            className={buttonVariants({
              variant: "ghost",
              className:
                "w-full justify-start py-1 h-7 text-muted-foreground hover:text-accent-foreground hover:bg-accent",
            })}
            href="#"
          >
            <span className="truncate"># {item.name}</span>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ChannelList;
