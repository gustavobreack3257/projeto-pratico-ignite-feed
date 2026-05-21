import { Divide, LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-columns-profile items-center gap-3">
      <img
        src="https://github.com/gustavobreack3257.png"
        className="h-5 w-5 rounded-full"
        alt="Imagem de perfil"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Gustavo costa
        </span>
        <span className="truncate text-sm text-zinc-500">
          gustavocostasouza78@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-50 cursor-pointer"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
