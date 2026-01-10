import type { FC } from "react";
import { Separator } from "@base-ui/react";
import Chats from "./Chats";
import Projects from "./Projects";
import Models from "./Models";
import MCP from "./MCP";
import Usage from "./Usage";
import Settings from "./Settings";
import Mode from "./Mode";

const Sidebar: FC = () => {
  return (
    <div className="flex w-64 flex-col border-r border-stone-300 bg-stone-100">
      <div className="flex flex-col px-12 py-3">
        <Chats />
        <Projects />
      </div>
      <Separator className="h-px bg-stone-300" />
      <div className="flex grow flex-col px-12 py-3">
        <Models />
        <MCP />
        <Usage />
      </div>
      <Separator className="h-px bg-stone-300" />
      <div className="flex flex-col px-12 py-3">
        <Settings />
        <Mode />
      </div>
    </div>
  );
};

export default Sidebar;
