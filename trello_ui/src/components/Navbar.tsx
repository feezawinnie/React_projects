import{LayoutGrid, Kanban, Search, Megaphone, Bell, CircleQuestionMark} from 'lucide-react'

function Navbar() {
  return (
    <div className="flex justify-between items-center text-white/60 p-2 border-b border-white/20 ">
     <div className="flex  items-center gap-2">   
     <button className="flex items-center  px-2 py-2">
        <LayoutGrid size={20} />
     </button>
     <button className='flex items-center rounded-l px-1 py-1 bg-[#0055CC] '>
        <Kanban size={20} strokeWidth={3.5} color = "white" />
     </button>
     </div>
     <div className= ' flex items-center gap-4 lg:hidden '>
        <Search size={20} />
        <button className='bg-[#6AA0F2] rounded-xl text-black/80 font-semi-bold py-2 px-4  '>
            Create
        </button>
     </div>
      
     <div className="hidden  border items-center   gap-2 rounded  px-3 lg:w-120 py-1 lg:flex">
        <Search size={20} className="shrink-0" />
        <input
          className="w-full min-w-0 bg-transparent text-white outline-none"
          placeholder="Search"
        />
      </div>
     
     <div className='flex  shrink-0 gap-4 items-center'>
        <button className="hidden rounded-xl bg-[#6AA0F2] px-4 py-2 font-semibold text-black/80 lg:block">
          Create
        </button>
        <Megaphone size={20}/>  
        <Bell size={20}/>
        <CircleQuestionMark size={20}/>
        <button className='rounded-full bg-[#00875A] w-7 h-7  text-white/90 text-[12px] font-medium '>
            FW
        </button>
     </div>
     
    </div>
  );
}
export default Navbar;