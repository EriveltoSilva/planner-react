import { Calendar, Tag, X } from "lucide-react";

interface CreateActivityModalProps {
    closeCreateActivityModal: () => void,
}


export function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-5'>
            <div className='w-[640px]  rounded-xl px-6 py-5 bg-zinc-900 shadow-shape space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-white text-lg font-semibold'>Cadastrar atividade</h2>
                        <button type='button' onClick={closeCreateActivityModal} className='size-5 text-zinc-400'><X /> </button>
                    </div>
                    <p className='text-zinc-400 text-sm'>
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>

                <form className='space-y-3'>
                    <div className="h-14 px-5 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2">
                        <Tag className='text-zinc-400 size-5' />
                        <input type="text" name="title" placeholder='Qual a atividade?' className='placeholder:text-zinc-400 bg-transparent outline-none flex-1' />
                    </div>


                    <div className="h-14 flex-1 px-5 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2">
                        <Calendar className='text-zinc-400 size-5' />
                        <input
                            type="datetime-local"
                            name="occurs_at"
                            placeholder='Data e horário da atividade'
                            className='placeholder:text-zinc-400 bg-transparent outline-none flex-1 [color-scheme:dark]'
                        />
                    </div>



                    <button type='submit' className="w-full h-11 bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg  px-5 font-medium flex items-center justify-center gap-2">
                        Salvar atividade
                    </button>

                </form>


            </div>

        </div>
    );
}