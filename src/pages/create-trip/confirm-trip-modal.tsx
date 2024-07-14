import { FormEvent } from "react";

import { Mail, User, X } from "lucide-react";


interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void,
    createTip: (e: FormEvent<HTMLFormElement>) => void,
}


export function ConfirmTripModal({
    closeConfirmTripModal,
    createTip
}: ConfirmTripModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-5'>
            <div className='w-[640px]  rounded-xl px-6 py-5 bg-zinc-900 shadow-shape space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-white text-lg font-semibold'>Confirmar criação da viagem</h2>
                        <button type='button' onClick={closeConfirmTripModal} className='size-5 text-zinc-400'><X /> </button>
                    </div>
                    <p className='text-zinc-400 text-sm'>
                        Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Rangel</span> nas datas de <span className='font-semibold text-zinc-100'>Terça-feira</span> preencha seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTip} className='space-y-3'>
                    <div className="h-14 px-5 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2">
                        <User className='text-zinc-400 size-5' />
                        <input type="text" name="name" placeholder='Seu nome completo' className='placeholder:text-zinc-400 bg-transparent outline-none flex-1' />
                    </div>

                    <div className="h-14 px-5 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2">
                        <Mail className='text-zinc-400 size-5' />
                        <input type="email" name="personalEmail" placeholder='Seu e-mail pessoal' className='placeholder:text-zinc-400 bg-transparent outline-none flex-1' />
                    </div>

                    <button type='submit' className="w-full h-11 bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg  px-5 font-medium flex items-center justify-center gap-2">
                        Confirmar criação da viagem
                    </button>

                </form>


            </div>

        </div>
    );
}