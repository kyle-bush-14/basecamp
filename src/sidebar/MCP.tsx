import type { FC } from "react";
import { ServerIcon } from "lucide-react";

const MCP: FC = () => {
  return (
    <button className="flex flex-row items-center gap-2 rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-200">
      <ServerIcon />
      <p>MCP</p>
    </button>
  );
};

export default MCP;
