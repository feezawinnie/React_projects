import {useState} from "react";

import {
  Sparkle,
  Search,
  PanelLeft,
  SquarePen,
  LayoutGrid,
  Images,
  Clock,
  GraduationCap,
  Ellipsis,
} from "lucide-react";


const menuItems = [
  { label: "Library", icon: <LayoutGrid size={20} /> },
  { label: "Images", icon: <Images size={20} /> },
  { label: "Scheduled", icon: <Clock size={20} /> },
  { label: "Students", icon: <GraduationCap size={20} /> },
  { label: "More", icon: <Ellipsis size={20} /> },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className={`h-screen bg-[#1e1f20] text-gray-200 p-3 flex flex-col duration-300 transition-all ${isOpen ? "w-72" : "w-20"}`}>
     
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <Sparkle size={22} className="text-blue-400 fill-blue-400" />
          {isOpen && <span className="text-xl">Gemini</span>}
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          {isOpen && (
          <Search size={20} className="cursor-pointer hover:text-white" />
          )}
          <PanelLeft size={20} className="cursor-pointer hover:text-white" onClick={toggleSidebar} />
        </div>
      </div>

     
      <button className={`mt-4 flex items-center gap-4 px-3 py-2.5 rounded-full bg-[#282a2c] text-white text-left ${!isOpen && "justify-between"}`}>
        <SquarePen size={20} />
        {isOpen && <span>New chat</span>}
      </button>

     
      <div className="mt-1 flex flex-col">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-4 px-3 py-2.5 rounded-full hover:bg-[#282a2c] text-left ${isOpen && "justify-center"}`}
          >
            {item.icon}
            { isOpen && <span>{item.label}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;