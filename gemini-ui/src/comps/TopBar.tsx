import { Download, Sparkle, PenLine } from "lucide-react";

function TopBar() {
  return (
    <div className="flex items-center justify-end gap-4 p-5">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-200 hover:bg-white/10">
        <Download size={18} />
        <span>Get app</span>
      </button>

      <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#1f4fd8] text-white hover:bg-[#2a5ae6]">
        <Sparkle size={18} className="fill-white" />
        <span>Upgrade</span>
      </button>

      <button className="p-2 rounded-full text-gray-200 hover:bg-white/10">
        <PenLine size={20} />
      </button>
    </div>
  );
}

export default TopBar;