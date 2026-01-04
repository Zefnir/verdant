import Image from "next/image";

interface iAppProps {
  message: string;
  date: Date;
  avatar: string;
  userName: string;
}

export function MessageItem({ avatar, date, message, userName }: iAppProps) {
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
        <p className="text-md wrap-break-word max-w-none">{message}</p>
      </div>
    </div>
  );
}
