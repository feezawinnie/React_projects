import { Plus, ChevronDown, Mic } from "lucide-react";

function ChatBox() {
  return (
    <div className="w-full max-w-3xl flex items-center gap-4 bg-[#1e1f20] rounded-full px-6 py-5">
      <Plus size={24} className="text-gray-300" />
      <input
        type="text"
        placeholder="Ask Gemini"
        className="flex-1 bg-transparent outline-none text-lg text-white placeholder-gray-400"
      />
      <button className="flex items-center gap-2 text-gray-200">
        <span>Gemini Auto</span>
        <ChevronDown size={18} />
      </button>
      <Mic size={22} className="text-gray-200" />
    </div>
  );
}

export default ChatBox;