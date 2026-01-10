import type { FC } from "react";
import { Settings2Icon } from "lucide-react";

const Settings: FC = () => {
  return (
    <button className="flex items-center rounded-lg p-2 hover:bg-stone-200">
      <Settings2Icon size={20} strokeWidth={1.5} />
    </button>
  );
};

export default Settings;
