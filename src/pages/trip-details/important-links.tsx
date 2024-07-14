import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {

    return (
        <div className="space-y-6">
            <h2 className="text-zinc-50 font-semibold text-xl">Links importantes</h2>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="text-zinc-100 font-medium block">Reserva do AirBnB</span>
                        <a href="#" className="text-zinc-400 hover:text-zinc-200 text-xs block truncate">
                            https://www.airbnb.com.br/rooms/104700sadasdasdasdasddasdas011
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="text-zinc-100 font-medium block">Regras da Casa</span>
                        <a href="#" className="text-zinc-400 hover:text-zinc-200 text-xs block truncate">
                            https://www.notion.com.br/rooms/104700sadasdasdasdasddasdas011

                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>


            <button className="bg-zinc-800 w-full h-11 justify-center hover:bg-zinc-900 text-zinc-200  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                <Plus className="size-5" />
                Cadastrar novo link
            </button>
        </div>
    );
}