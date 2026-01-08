import type { FC } from "react";
import { Settings2Icon } from "lucide-react";

const Settings: FC = () => {
  return (
    <button className="flex items-center hover:bg-stone-200 p-2 rounded-lg">
      <Settings2Icon size={20} strokeWidth={1.5} />
    </button>
  );
};

export default Settings;
