import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
    emailsToInvite: string[],
    addEmailToInvite: (e: FormEvent<HTMLFormElement>) => void,
    removeEmailFromList: (email: string) => void,
    closeGuestsModal: () => void,
}

export function InviteGuestsModal({
    emailsToInvite,
    addEmailToInvite,
    removeEmailFromList,
    closeGuestsModal,
}: InviteGuestsModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-5'>
            <div className='w-[640px]  rounded-xl px-6 py-5 bg-zinc-900 shadow-shape space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-white text-lg font-semibold'>Selecionar convidados</h2>
                        <button type='button' onClick={closeGuestsModal} className='size-5 text-zinc-400'><X /> </button>
                    </div>
                    <p className='text-zinc-400 text-sm'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
                </div>

                <div className='flex flex-wrap gap-2'>

                    {emailsToInvite?.map((email, index) =>
                        <div key={index} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                            <span className='text-zinc-300'>{email}</span>
                            <button type='button' onClick={() => removeEmailFromList(email)}>
                                <X className='size-4 text-zinc-400' />
                            </button>
                        </div>
                    )

                    }
                </div>

                <div className='w-full h-px bg-zinc-800' />

                <form onSubmit={addEmailToInvite} className='p-2.5 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2'>
                    <div className="px-2 flex items-center flex-1 gap-2">
                        <AtSign className='text-zinc-400 size-5' />
                        <input type="email" name="email" placeholder='Digite o e-mail do convidado' className='placeholder:text-zinc-400 bg-transparent outline-none flex-1' />
                    </div>

                    <button type='submit' className="bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                        Convidar
                        <Plus className="size-5" />
                    </button>

                </form>


            </div>

        </div>
    );
}