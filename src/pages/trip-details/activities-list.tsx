import { CircleCheck, CircleDashed } from "lucide-react";


export function ActivityList() {
    return (
        <div className="space-y-8">
            <div className="space-y-3 ">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">Dia 17</span>
                    <span className="text-xs text-zinc-500">Sábado</span>
                </div>
                <p className="text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-3">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">Dia 18</span>
                    <span className="text-xs text-zinc-500">Domingo</span>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full bg-zinc-900 h-10 rounded-xl px-4 py-2.5 flex  items-center gap-3 shadow-shape">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="flex-1 text-zinc-100">Corrida de Kart</span>
                        <span className="text-zinc-400">14:00h</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">Dia 19</span>
                    <span className="text-xs text-zinc-500">Segunda-feira</span>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full bg-zinc-900 h-10 rounded-xl px-4 py-2.5 flex  items-center gap-3 shadow-shape">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="flex-1 text-zinc-100">Academia em gripo</span>
                        <span className="text-zinc-400">08:00h</span>
                    </div>

                    <div className="w-full bg-zinc-900 h-10 rounded-xl px-4 py-2.5 flex  items-center gap-3 shadow-shape">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="flex-1 text-zinc-100">Almoço</span>
                        <span className="text-zinc-400">12:00h</span>
                    </div>

                    <div className="w-full bg-zinc-900 h-10 rounded-xl px-4 py-2.5 flex  items-center gap-3 shadow-shape">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="flex-1 text-zinc-100">Gaming session</span>
                        <span className="text-zinc-400">18:00h</span>
                    </div>

                    <div className="w-full bg-zinc-900 h-10 rounded-xl px-4 py-2.5 flex  items-center gap-3 shadow-shape">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="flex-1 text-zinc-100">Jantar</span>
                        <span className="text-zinc-400">21:00h</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">Dia 20</span>
                    <span className="text-xs text-zinc-500">Terça-feira</span>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full bg-zinc-900 h-10 rounded-xl px-4 py-2.5 flex  items-center gap-3 shadow-shape">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="flex-1 text-zinc-100">Academia em grupo</span>
                        <span className="text-zinc-400">08:00h</span>
                    </div>

                    <div className="w-full bg-zinc-900 h-10 rounded-xl px-4 py-2.5 flex  items-center gap-3 shadow-shape">
                        <CircleDashed className="size-5 text-zinc-400" />
                        <span className="flex-1 text-zinc-100">Almoço</span>
                        <span className="text-zinc-400">12:00h</span>
                    </div>

                    <div className="w-full bg-zinc-900 h-10 rounded-xl px-4 py-2.5 flex  items-center gap-3 shadow-shape">
                        <CircleDashed className="size-5 text-zinc-400" />
                        <span className="flex-1 text-zinc-100">Jantar</span>
                        <span className="text-zinc-400">21:00h</span>
                    </div>
                </div>
            </div>

        </div>
    );
}