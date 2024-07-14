import { CircleCheck, CircleDashed, UserCog } from "lucide-react";


export function GuestsList() {
    return (
        <div className="space-y-6">
            <h2 className="text-zinc-50 font-semibold text-xl">Convidados</h2>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="text-zinc-100 font-medium block">Kelvio Eduardo</span>
                        <span className="text-zinc-400 text-sm block truncate">
                            kelvio.eduardo@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="text-zinc-100 font-medium block">Lukenia Tainara</span>
                        <span className="text-zinc-400 text-sm block truncate">
                            lukenia.tainara@gmail.com
                        </span>
                    </div>
                    <CircleCheck className="text-lime-300 size-5 shrink-0" />
                </div>


            </div>


            <button className="bg-zinc-800 w-full h-11 justify-center hover:bg-zinc-900 text-zinc-200  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                <UserCog className="size-5" />
                Gerenciar convidados
            </button>
        </div>
    );
}