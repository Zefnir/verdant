/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { ReactNode } from "react";
import { WorkspaceList } from "./[workspaceId]/_components/WorkspaceList";
import { CreateWorkspace } from "./[workspaceId]/_components/CreateWorkspace";

import { supabase } from "@/lib/supabase/client";
import { useEffect, useState, createContext } from "react";
import type { Workspace } from "@/app/schemas/workspace";
// import { UserNav } from "./_components/UserNav";

export const WorkspaceContext = createContext<Workspace[] | null>(null);

const WorkspaceLayout = ({ children }: { children: ReactNode }) => {
  const [workspace, setWorkspace] = useState<Workspace[]>([]);
  const fetchList = async () => {
    console.log("fetchList called");
    const { data, error } = await supabase.from("workspace").select("*");

    if (error) {
      console.log("Error fetching data");
      return;
    }
    setWorkspace(data || []);
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="flex w-full h-screen">
      <div className="flex h-full w-16 flex-col items-center bg-secondary py-3 px-2 border-r border-border">
        <WorkspaceList workspaceList={workspace} />

        <div className="mt-4">
          <CreateWorkspace onCreated={fetchList} />
        </div>

        <div className="mt-auto">{/* <UserNav /> */}</div>
      </div>
      <WorkspaceContext.Provider value={workspace}>
        {children}
      </WorkspaceContext.Provider>
    </div>
  );
};

export default WorkspaceLayout;
