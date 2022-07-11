import { FileSearch, MagnifyingGlass } from 'phosphor-react'

export function PostHeader() {
  return (
    <header className="w-full pb-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-1 h-8 bg-green-300"></div>
          <h1 className="font-bold text-3xl">Últimas publicações</h1>
        </div>
        <div className="rounded flex items-center justify-between w-[30%] bg-gray-900 border border-gray-500 py-[6px] px-4 w-full">
          <input
            type="text"
            className="bg-transparent w-[90%] text-sm placeholder:text-gray-300"
            placeholder="Pesquisar..."
          />
          <button>
            <MagnifyingGlass size={21} />
          </button>
        </div>
      </div>
    </header>
  )
}
