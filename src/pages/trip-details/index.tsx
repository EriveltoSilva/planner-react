import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

export function TripDetailsPage() {
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <div className="pl-6 pr-4 rounded-xl bg-zinc-900 h-16 w-full shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                    <MapPin className="size-5 text-zinc-400" />
                    <span className="text-zinc-100 ">
                        Rangel, Angola
                    </span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400" />
                        <span className="text-lg text-zinc-100">
                            17 a 23 de Agosto
                        </span>
                    </div>

                    <div className='w-px h-6 bg-zinc-800' />

                    <button className="bg-zinc-800 hover:bg-zinc-900 text-zinc-200  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                        Alterar local/data
                        <Settings2 className="size-5" />
                    </button>
                </div>

            </div>

            <main className="flex gap-16 px-6">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl text-zinc-50 font-semibold">Atividades</h2>
                        <button className="bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                            <Plus className="size-5" />
                            Cadastrar atividade
                        </button>
                    </div>

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

                </div>


                <div className="w-80 space-y-6">
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

                    <div className='w-full h-px bg-zinc-800' />



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

                </div>
            </main>

        </div>
    )
}
