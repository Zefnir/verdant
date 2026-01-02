"use client";

import { ReactNode } from "react";
import { CreateChannel } from "./_components/CreateChannel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import ChannelList from "./page";

const ChannelListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex shrink-0 h-full w-80 flex-col bg-secondary border-r border-border gap-4 px-4 py-4">
        <p className="text-2xl font-bold">
          <span className="text-lime-400">Ver</span>dant
        </p>
        <div>
          <CreateChannel />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between  py-1 text-sm font-medium text-muted-foreground hover:text-accent-foreground hover:cursor-pointer">
              Main
              <ChevronDown className="size-4 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ChannelList />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default ChannelListLayout;
