import type { FC } from "react";
import { ClockFadingIcon } from "lucide-react";

const Thinking: FC = () => {
  return (
    <button className="flex items-center hover:bg-stone-200 p-2 rounded-lg">
      <ClockFadingIcon size={20} strokeWidth={1.5} />
    </button>
  );
};

export default Thinking;
