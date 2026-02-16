"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { CreateChannel } from "./_components/CreateChannel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { useParams } from "next/navigation";
import { Channel } from "@/app/schemas/channel";
import Link from "next/link";
import Image from "next/image";

interface iChannelContext {
  data: Channel[];
  refresh: () => Promise<void>;
}

export const ChannelContext = createContext<iChannelContext | null>(null);

const ChannelListLayout = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const [channel, setChannel] = useState<Channel[]>([]);
  console.log("this is paramas: ", params);

  const fetchChannel = useCallback(async () => {
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
  }, [params.workspaceId]);

  useEffect(() => {
    Promise.resolve().then(fetchChannel);
  }, [fetchChannel]);

  return (
    <>
      <div className="flex shrink-0 h-full w-80 flex-col bg-secondary border-r border-border gap-4 px-4 py-4">
        <Link
          href="/"
          aria-label="home"
          className="flex items-center space-x-2 font-semibold text-2xl"
        >
          <Image src="/new-logo.png" alt="Verdant" width={36} height={36} />
          <span className="text-lime-500">Ver</span>dant
        </Link>
        <div>
          <ChannelContext.Provider
            value={{ data: channel, refresh: fetchChannel }}
          >
            <CreateChannel />
          </ChannelContext.Provider>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between  py-1 text-sm font-medium text-muted-foreground hover:text-accent-foreground hover:cursor-pointer">
              Main
              <ChevronDown className="size-4 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div>
                {channel.map((item) => (
                  <Link
                    key={item.id}
                    className={buttonVariants({
                      variant: "ghost",
                      className:
                        "w-full justify-start py-1 h-7 text-muted-foreground hover:text-accent-foreground hover:bg-accent",
                    })}
                    href={`/workspace/${params.workspaceId}/channel/${item.id}`}
                  >
                    <span className="truncate"># {item.name}</span>
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <div className="flex-1">
        <ChannelContext.Provider
          value={{ data: channel, refresh: fetchChannel }}
        >
          {children}
        </ChannelContext.Provider>
      </div>
    </>
  );
};
export default ChannelListLayout;
