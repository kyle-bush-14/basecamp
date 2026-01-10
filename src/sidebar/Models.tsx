import type { FC } from "react";
import { BoxIcon } from "lucide-react";

const Models: FC = () => {
  return (
    <button className="flex flex-row items-center gap-2 rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-200">
      <BoxIcon />
      <p>Models</p>
    </button>
  );
};

export default Models;
