import { FormEvent, useState } from 'react';

import { ArrowRight, AtSign, Calendar, Mail, MapPin, Plus, Settings2, User, UserRoundPlus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CreateTripPage() {
    const navigate = useNavigate();


    const [emailsToInvite, setEmailsToInvite] = useState<Array<string>>([])
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false);
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState<boolean>(false);

    const openGuestsInput = () => {
        setIsGuestsInputOpen(true);
    }

    const closeGuestsInput = () => {
        setIsGuestsInputOpen(false);
    }

    const openGuestsModal = () => {
        setIsGuestsModalOpen(true);
    }

    const closeGuestsModal = () => {
        setIsGuestsModalOpen(false);
    }

    const openConfirmTripModal = () => {
        setIsConfirmTripModalOpen(true);
    }

    const closeConfirmTripModal = () => {
        setIsConfirmTripModalOpen(false);
    }

    const addEmailToInvite = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get("email")?.toString();
        if (!email) {
            alert("Preencha o campo com um email");
            return;
        }
        if (emailsToInvite.includes(email)) {
            alert("Este email já se encontra na lista de convidados!");
            return;
        }

        setEmailsToInvite([...emailsToInvite, email]);
        e.currentTarget.reset();
    }

    const removeEmailFromList = (emailToRemove: string) => {
        const newEmailList = emailsToInvite.filter((email) => email != emailToRemove)
        setEmailsToInvite(newEmailList);
    }

    const createTip = () => {
        navigate("/trips/123");
    }


    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className='flex flex-col items-center gap-3'>
                    <img src="/Logo.svg" alt="plann.er" className=' w-[172px] h-11' />
                    <p className="text-zinc-300">Convide seus amigos e planeie sua próxima viagem.</p>
                </div>

                <div className='space-y-4'>
                    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                        <div className='flex items-center gap-2 flex-1'>
                            <MapPin className='size-5 text-zinc-400' />
                            <input type="text" disabled={isGuestsInputOpen} placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                        </div>

                        <div className="flex items-center gap-2">
                            <Calendar className='size-5 text-zinc-400' />
                            <input type="text" disabled={isGuestsInputOpen} placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
                        </div>

                        <div className='w-px h-6 bg-zinc-800' />

                        {isGuestsInputOpen ?
                            <button onClick={closeGuestsInput} className="bg-zinc-800 hover:bg-zinc-900 text-zinc-200  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                                Alterar local/data
                                <Settings2 className="size-5" />
                            </button>
                            :
                            <button onClick={openGuestsInput} className="bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                                Continuar
                                <ArrowRight className="size-5" />
                            </button>
                        }
                    </div>



                    {isGuestsInputOpen &&
                        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                            <button type="button" onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
                                <UserRoundPlus className='size-5 text-zinc-400' />
                                {emailsToInvite.length > 0
                                    ?
                                    (<span className='text-zinc-100 text-lg flex-1'>{emailsToInvite.length}  pessoa(s) convidada(s).</span>)
                                    :
                                    (<span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>)
                                }
                            </button>

                            <div className='w-px h-6 bg-zinc-800' />

                            <button onClick={openConfirmTripModal} className="bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                                Confirmar viagem
                                <ArrowRight className="size-5" />
                            </button>
                        </div>
                    }
                </div>

                <p className="text-sm text-zinc-500">
                    Ao planear sua viagem pela plann.er você automaticamente concorda<br />
                    com nossos <a href="#" className="text-zinc-300 underline"> termos de uso</a> e
                    <a href="#" className="text-zinc-300 underline"> políticas de privacidade </a>.
                </p>
            </div>


            {isGuestsModalOpen &&
                (
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
                )
            }

            {isConfirmTripModalOpen &&
                (
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

                            <form onSubmit={addEmailToInvite} className='space-y-3'>
                                <div className="h-14 px-5 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2">
                                    <User className='text-zinc-400 size-5' />
                                    <input type="text" name="name" placeholder='Seu nome completo' className='placeholder:text-zinc-400 bg-transparent outline-none flex-1' />
                                </div>

                                <div className="h-14 px-5 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center gap-2">
                                    <Mail className='text-zinc-400 size-5' />
                                    <input type="email" name="personalEmail" placeholder='Seu e-mail pessoal' className='placeholder:text-zinc-400 bg-transparent outline-none flex-1' />
                                </div>

                                <button type='submit' onClick={createTip} className="w-full h-11 bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg  px-5 font-medium flex items-center justify-center gap-2">
                                    Confirmar criação da viagem
                                </button>

                            </form>


                        </div>

                    </div>
                )
            }

        </div>
    );
}


