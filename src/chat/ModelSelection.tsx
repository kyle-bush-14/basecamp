import type { FC } from "react";
import { ChevronDownIcon } from "lucide-react";

const ModelSelection: FC = () => {
  return (
    <button className="flex flex-row gap-1 text-stone-700 p-2 hover:bg-stone-200 rounded-lg">
      <p className="text-xs">Claude Sonnet 4.5</p>
      <ChevronDownIcon size={16} strokeWidth={1.5} />
    </button>
  );
};

export default ModelSelection;
