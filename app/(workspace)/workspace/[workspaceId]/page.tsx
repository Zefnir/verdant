import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Cloud } from "lucide-react";
import { CreateChannel } from "./_components/CreateChannel";

export default function Channel() {
  return (
    <div className="bg-card p-16 from-30% h-screen flex flex-1">
      <Empty className="border border-dashed from-muted/50 to-background h-full bg-linear-to-b from-40%">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Cloud />
          </EmptyMedia>
          <EmptyTitle>No channels yet!</EmptyTitle>
          <EmptyDescription>
            Create your first channel to get started!
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="max-w-xs mx-auto">
          <CreateChannel />
        </EmptyContent>
      </Empty>
    </div>
  );
}
