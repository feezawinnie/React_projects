
import { useState } from "react";

import {Activity, ChevronDown,Settings,Users, Plus,Columns3, ImagePlus} from "lucide-react"
function Sidebar() {
  const [WorkspaceOpen, setWorkspaceOpen] = useState<boolean>(false);

  return (
    <aside className="h-[calc(100vh-2.25rem)] w-72 shrink-0 text-white/40 flex flex-col p-2"> 
        <div className="flex mt-6 border-b border-white/10 justify-between flex-col gap-2  p-2">
         <div className="flex items-center p-1.5 text-blue-400  text-sm gap-4 font-normal bg-[#1C2B42] rounded-xl">
            <Columns3  size={15}/>
            <span>Boards</span>
         </div>
         <div className="flex items-center text-white/80 p-2 gap-4 text-sm hover:bg-white/20">
            <ImagePlus  size={15}/>
            <span>Templates</span>
         </div>
         <div className="flex items-center text-white/80 p-2 gap-4 text-sm hover:bg-white/20">
            <Activity  size={15}/>
            <span>Home</span>
         </div>

        </div>

         <div className="flex  flex-col mt-2 p-2">
            <span className="text-white/40 mb-1 text-xs">Workspaces</span>
            <button
              type="button"
              onClick={() => setWorkspaceOpen(!WorkspaceOpen)}
               className="flex items-center  text-white/80 p-2 gap-2 text-sm hover:bg-white/20"
            >

             <div className="w-7 h-7 rounded-md bg-linear-to-br from-green-400 to-blue-500 flex items-center text-white text-xs font-bold">
                FW
             </div>
             <span className="flex-1 font-medium">feeza winnie's workspace</span>
               <ChevronDown size={15} className={`transition-transform duration-200 ${WorkspaceOpen ? "rotate-180" : ""}`} />
            </button>

            {WorkspaceOpen && (
              <div className="flex flex-col gap-2 mt-2 pl-8">
                <div className="flex items-center text-white/80 p-2 gap-4 text-sm hover:bg-white/20 rounded-xl cursor-pointer">
                  <Columns3 size={15}/>
                  <span>Boards</span>
                </div>

                <div className="flex items-center text-white/80 p-2 gap-4 text-sm hover:bg-white/20 rounded-xl cursor-pointer">
                  <Users size={15}/>
                  <span>Members</span>
                   <button
                type="button"
                onClick={() => console.log("Add member")}
                className="p-0.5 rounded hover:bg-white/20"
              >
                <Plus size={15} />
              </button>
                </div>
                
            <div className="flex items-center text-white/80 p-2 gap-4 text-sm hover:bg-white/20 rounded-xl cursor-pointer">
              <Settings size={15} />
              <span>Settings</span>
            </div>

         </div>
            )}
         </div>  
    </aside>
  );
}
export default Sidebar;