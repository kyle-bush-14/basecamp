import type { FC } from "react";
import { ChevronDownIcon } from "lucide-react";

const ModelSelection: FC = () => {
  return (
    <button className="flex flex-row items-center gap-1 rounded-lg p-2 text-stone-700 hover:bg-stone-200">
      <p className="text-sm">Claude Sonnet 4.5</p>
      <ChevronDownIcon size={16} strokeWidth={1.5} />
    </button>
  );
};

export default ModelSelection;
