import Sidebar from "./comps/Sidebar";
import TopBar from "./comps/TopBar";
import ChatBox from "./comps/ChatBox";
import Suggestions from "./comps/Suggestions";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      
      <main className="flex-1 flex flex-col bg-[#131314] bg-[radial-gradient(ellipse_at_center,#1b2a5c_0%,#131314_65%)]">
        <TopBar />

        <div className="flex-1 flex flex-col items-center justify-center pb-32 px-5">
          <h1 className="text-5xl text-gray-100 mb-10">Where should we start?</h1>
          <ChatBox />
          <Suggestions />
        </div>
      </main>
    </div>
  );
}

export default App;