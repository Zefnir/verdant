import { ReactNode } from "react";

const Message = ({ children }: { children: ReactNode }) => {
  return <div className="flex">{children}</div>;
};

export default Message;
