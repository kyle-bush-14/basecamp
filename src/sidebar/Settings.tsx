import type { FC } from "react";
import { SettingsIcon } from "lucide-react";

const Settings: FC = () => {
  return (
    <button className="flex flex-row gap-2 items-center text-stone-700 py-2 px-3 rounded-lg hover:bg-stone-200">
      <SettingsIcon />
      <p>Settings</p>
    </button>
  );
};

export default Settings;
