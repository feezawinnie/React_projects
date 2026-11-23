import Button from "./Button";

function Calculator() {
  return(
    
     <div className="w-80 rounded-3xl bg-black p-5">
        <div className=" mb-4 text-right text-6xl font-light text-white">0</div>
        <div className="grid grid-cols-4 gap-2">
            <Button label ="AC" className="bg-orange-400 hover:bg-orange-600 text-black"></Button>
            <Button label ="+/-" className="bg-orange-400 hover:bg-orange-600 text-black"></Button>
            <Button label ="%" className="bg-orange-400 hover:bg-orange-600 text-black"></Button>
            <Button label ="÷" className="bg-gray-400 hover:bg-gray-600 text-black"></Button>

            <Button label ="7" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="8" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="9" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="x" className="bg-gray-400 hover:bg-gray-600 text-black"></Button>

            <Button label ="4" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>  
            <Button label ="5" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="6" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="-" className="bg-gray-400 hover:bg-gray-600 text-black"></Button>

            <Button label ="1" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="2" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="3" className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="+" className="bg-gray-400 hover:bg-gray-600 text-black"></Button>

            <Button label ="0" className="col-span-2 bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="." className="bg-neutral-700 hover:bg-neutral-900 text-white"></Button>
            <Button label ="=" className="bg-gray-400 hover:bg-gray-600 text-black"></Button>
          

        </div>
     </div>
    
  )
}
export default Calculator;