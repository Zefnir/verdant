"use client";

import { ChannelHeader } from "./_components/ChannelHeader";
import { MessageInputForm } from "./_components/message/MessageInputForm";
import { MessageList } from "./_components/MessageList";

const ChannelPageMain = () => {
  return (
    <div className="flex h-screen w-full bg-sidebar">
      {/* Main channel area */}
      <div className="flex flex-col flex-1 min-w-0">
        <ChannelHeader />
        {/* Scrollable Message Area */}
        <div className="overflow-hidden">
          <MessageList />
        </div>
        <div className="border-t px-4">
          <MessageInputForm />
        </div>
      </div>
      {/*{isLoading ? (
              <div className="flex items-center justify-between h-14 px-4 border-b">
                <Skeleton className="h-6 w-40" />
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-8 w-28" />
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="size-8" />
                </div>
              </div>
            ) : (
              <ChannelHeader channelName={data?.channelName} />
            )} */}

      {/* Fixed Inputs */}
      {/* <div className="border-t bg-background p-4">
              <MessageInputForm
                channelId={channelId}
                user={data?.currentUser as KindeUser<Record<string, unknown>>}
              />
            </div>
          </div> */}

      {/* {isThreadOpen && (
            <ThreadSidebar
              user={data?.currentUser as KindeUser<Record<string, unknown>>}
            />
          )} */}
    </div>
  );
};

// const ThisIsTheChannelPage = () => {
//   return (
//     <ThreadProvider>
//       <ChannelPageMain />
//     </ThreadProvider>
//   );
// };

export default ChannelPageMain;
