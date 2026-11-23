import Button from "./Button";

function Calculator() {
  return(
    
     <div className="w-80 bg-black">
        <div className="mb-0 flex h-20 items-end justify-end bg-[#777] px-2 pb-1 text-5xl font-light text-white">0</div>
        <div className="grid grid-cols-4">
            <Button label ="AC" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="+/-" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="%" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="÷" className="bg-[#c66d25] hover:bg-orange-600 text-white"></Button>

            <Button label ="7" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="8" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="9" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="x" className="bg-[#c66d25] hover:bg-orange-600 text-white"></Button>

            <Button label ="4" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>  
            <Button label ="5" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="6" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="-" className="bg-[#c66d25] hover:bg-orange-600 text-white"></Button>

            <Button label ="1" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="2" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="3" className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="+" className="bg-[#c66d25] hover:bg-orange-600 text-white"></Button>

            <Button label ="0" className="col-span-2 bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="." className="bg-[#e2e2e2] hover:bg-gray-300 text-black"></Button>
            <Button label ="=" className="bg-[#c66d25] hover:bg-orange-600 text-white"></Button>
          

        </div>
     </div>
    
  )
}
export default Calculator;