import type { FC } from "react";
import { Server } from "lucide-react";

const MCP: FC = () => {
  return (
    <button className="flex flex-row gap-2 items-center text-stone-700 py-2 px-3 rounded-lg hover:bg-stone-200">
      <Server />
      <p>MCP</p>
    </button>
  );
};

export default MCP;
