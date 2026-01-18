import { SafeContent } from "@/components/rich-text-editor/SafeContent";
import Image from "next/image";

interface iMessage {
  message: string;
  date: Date;
  avatar: string;
  userName: string;
  imageUrl: string;
}

function safeParseContent(content: string) {
  if (!content) {
    console.log("oops");
  }

  try {
    return JSON.parse(content);
  } catch {
    return null;
  }
}

export function MessageItem({
  avatar,
  date,
  message,
  userName,
  imageUrl,
}: iMessage) {
  return (
    <div className="flex gap-2 relative p-3 rounded-lg group hover:bg-muted/50">
      <Image
        src={avatar.trimEnd()}
        alt="User Avatar"
        width={64}
        height={64}
        className="size-12 rounded-lg"
      />
      <div className="flex-1 space-y-2 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium leading-none">{userName}</p>
          <p className="text-sm text-muted-foreground leading-none">
            {new Intl.DateTimeFormat("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(date)}{" "}
            {new Intl.DateTimeFormat("en-GB", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
            }).format(date)}
          </p>
        </div>
        <SafeContent
          className="text-sm break-word prose dark:prose-invert max-w-none mark:text-primary"
          content={safeParseContent(message)}
        />
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="image"
            width={512}
            height={512}
            className="object-contain w-auto rounded-md max-h-80"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
