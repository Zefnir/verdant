"use client";

import type { Workspace } from "@/app/schemas/workspace";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

type Props = {
  workspaceList: Workspace[];
};

export function WorkspaceList({ workspaceList }: Props) {
  console.log("THis is workspacelist: ", workspaceList);
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-3">
        {workspaceList &&
          workspaceList.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Link href={`/workspace/${item.id}`}>
                  <Button className="size-12 rounded-full hover:cursor-pointer">
                    <span className="text-sm font-semibold">
                      {item.name.charAt(0).toUpperCase()}
                    </span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
      </div>
    </TooltipProvider>
  );
}
