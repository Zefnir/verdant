import { ModeToggle } from "@/components/ui/theme-toggle";
import { useContext } from "react";
import { ChannelContext } from "../../../layout";
import { useParams } from "next/navigation";

export function ChannelHeader() {
  const channelContext = useContext(ChannelContext);
  const params = useParams();
  console.log(channelContext);

  const channelObj = channelContext?.data.find(
    (item) => item.id === params.channelId
  );

  const channelTitle = channelObj?.name ?? "channel1";

  if (!channelTitle) {
    console.log("deo co channel");
  }

  return (
    <div className="flex h-14 items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-semibold truncate"># {channelTitle}</h1>

      <div className="flex items-center space-x-3 ">
        <ModeToggle />
      </div>
    </div>
  );
}
