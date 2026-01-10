import type { FC } from "react";
import { MessageCircleIcon } from "lucide-react";

const Chats: FC = () => {
  return (
    <button className="flex flex-row items-center gap-2 rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-200">
      <MessageCircleIcon />
      <p>Chats</p>
    </button>
  );
};

export default Chats;
