import type { FC } from "react";
import { SendIcon } from "lucide-react";

const Send: FC = () => {
  return (
    <button className="p-2 rounded-lg bg-stone-900 flex items-center">
      <SendIcon size={20} strokeWidth={1.5} className="text-stone-50" />
    </button>
  );
};

export default Send;
