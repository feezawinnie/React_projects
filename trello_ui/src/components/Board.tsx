
function Board() {
  return (
    <div className="min-w-0 flex-1 text-white">

      <header className="mx-auto max-w-7xl px-6 py-9.5">
        <div className="flex items-center gap-4">

         
          <div className="flex  gap-6 h-20 w-20 items-center justify-center rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-3xl font-bold">
            F
          </div>

          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">
              feeza winnie's workspace
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              🔒 Private
            </p>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-7xl border-t border-gray-700 px-6 py-8">

        <h2 className="mb-8 text-xl font-semibold">
          Your boards
        </h2>

       
        <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">

          
          <div className="group w-full cursor-pointer overflow-hidden rounded-xl bg-[#292929] transition hover:bg-[#383838] lg:w-[215px] lg:flex-none">

            <div className="h-24 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                alt="Mountain landscape"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="min-h-[60px] p-3">
              <h3 className="font-medium">
                FEEZA WINNIE - THEGYM TODOs
              </h3>
            </div>

          </div>

         
          <div className="group w-full cursor-pointer overflow-hidden rounded-xl bg-[#292929] transition hover:bg-[#383838] lg:w-[215px] lg:flex-none">

            <div className="h-24 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390"
                alt="City skyline"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="min-h-[60px] p-3">
              <h3 className="font-medium">
                feeza's board
              </h3>
            </div>

          </div>

          
          <div className="flex min-h-[60px] w-full cursor-pointer items-center justify-center rounded-xl bg-[#292929] text-gray-300 transition hover:bg-[#383838] hover:text-white lg:w-[215px] lg:flex-none">

            <span className="font-medium">
              + Create new board
            </span>

          </div>

        </div>
      </main>
    </div>
  );
}

export default Board;
