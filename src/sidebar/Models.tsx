import type { FC } from "react";
import { Box } from "lucide-react";

const Models: FC = () => {
  return (
    <button className="flex flex-row gap-2 items-center text-stone-700 py-2 px-3 rounded-lg hover:bg-stone-200">
      <Box />
      <p>Models</p>
    </button>
  );
};

export default Models;
