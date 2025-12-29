import type { FC } from "react";
import { MessageCircle, Box, Server, Activity } from "lucide-react";

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center">
        <MessageCircle />
        <p>New chat</p>
      </div>
      <div className="flex flex-row gap-2">
        <Box />
        <p>Models</p>
      </div>
      <div className="flex flex-row gap-2">
        <Server />
        <p>MCP</p>
      </div>
      <div className="flex flex-row gap-2">
        <Activity />
        <p>Activity</p>
      </div>
    </div>
  );
};

export default Sidebar;
