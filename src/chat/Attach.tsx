import type { FC } from "react";
import { PaperclipIcon } from "lucide-react";

const Attach: FC = () => {
  return (
    <button className="flex items-center rounded-lg p-2 hover:bg-stone-200">
      <PaperclipIcon size={20} strokeWidth={1.5} />
    </button>
  );
};

export default Attach;
