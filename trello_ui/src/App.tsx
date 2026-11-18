import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";

function App() {
  

  return (
    <div className="min-h-screen w-full  bg-[#1F1F21]">
    <Navbar/>
    <div className="flex">
      <Sidebar/>
      <Board/>
    </div>
    </div>
  );

}

export default App;
