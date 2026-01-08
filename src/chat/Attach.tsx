import type { FC } from "react";
import { PaperclipIcon } from "lucide-react";

const Attach: FC = () => {
  return (
    <button className="flex items-center hover:bg-stone-200 p-2 rounded-lg">
      <PaperclipIcon size={20} strokeWidth={1.5} />
    </button>
  );
};

export default Attach;
