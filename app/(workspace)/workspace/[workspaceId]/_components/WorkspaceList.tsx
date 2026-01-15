"use client";

import type { Workspace } from "@/app/schemas/workspace";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  workspaceList: Workspace[];
};

const colorCombination = [
  "bg-lime-600 hover:bg-lime-700 text-white",
  "bg-emerald-600 hover:bg-emerald-700 text-white",
  "bg-purple-400 hover:bg-purple-700 text-white",
  "bg-amber-500 hover:bg-amber-700 text-white",
  "bg-rose-500 hover:bg-rose-700 text-white",
  "bg-indigo-400 hover:bg-indigo-600 text-white",
  "bg-cyan-500 hover:bg-cyan-700 text-white",
  "bg-red-500 hover:bg-red-700 text-white",
];

// Return color according to workspace
const getWorkspaceColor = (id: string) => {
  const charSum = id
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const colorIndex = charSum % colorCombination.length;

  return colorCombination[colorIndex];
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
                  <Button
                    className={cn(
                      "size-12 rounded-full hover:cursor-pointer",
                      getWorkspaceColor(item.id)
                    )}
                  >
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
