import type { FC } from "react";
import { ActivityIcon } from "lucide-react";

const Usage: FC = () => {
  return (
    <button className="flex flex-row items-center gap-2 rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-200">
      <ActivityIcon />
      <p>Usage</p>
    </button>
  );
};

export default Usage;
