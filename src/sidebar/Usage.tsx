import type { FC } from "react";
import { ActivityIcon } from "lucide-react";

const Usage: FC = () => {
  return (
    <button className="flex flex-row gap-2 items-center text-stone-700 py-2 px-3 rounded-lg hover:bg-stone-200">
      <ActivityIcon />
      <p>Usage</p>
    </button>
  );
};

export default Usage;
