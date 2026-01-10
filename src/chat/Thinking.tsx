import type { FC } from "react";
import { ClockFadingIcon } from "lucide-react";

const Thinking: FC = () => {
  return (
    <button className="flex items-center rounded-lg p-2 hover:bg-stone-200">
      <ClockFadingIcon size={20} strokeWidth={1.5} />
    </button>
  );
};

export default Thinking;
