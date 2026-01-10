import type { FC } from "react";
import { FolderIcon } from "lucide-react";

const Projects: FC = () => {
  return (
    <button className="flex flex-row items-center gap-2 rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-200">
      <FolderIcon />
      <p>Projects</p>
    </button>
  );
};

export default Projects;
