"use client";

import { use, useContext, useEffect } from "react";
import { WorkspaceContext } from "./layout";
import { useRouter } from "next/navigation";

export default function Workspace() {
  const workspaceContext = useContext(WorkspaceContext);
  const router = useRouter();

  useEffect(() => {
    const id = workspaceContext?.data?.[0]?.id;

    if (id) {
      router.push(`/workspace/${id}`);
    }
  }, [workspaceContext, router]);
}
