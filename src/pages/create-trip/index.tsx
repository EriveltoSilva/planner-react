import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Steps modals
import { ConfirmTripModal } from './confirm-trip-modal';
import { InviteGuestsModal } from './invite-guest-modal';

// Steps
import { DestinationAndDataStep } from './steps/destination-and-date-step';
import { InviteGuestStep } from './steps/invite-guest-step';


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

    const createTip = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                    <DestinationAndDataStep
                        closeGuestsInput={closeGuestsInput}
                        isGuestsInputOpen={isGuestsInputOpen}
                        openGuestsInput={openGuestsInput}
                    />



                    {isGuestsInputOpen &&
                        <InviteGuestStep
                            emailsToInvite={emailsToInvite}
                            openConfirmTripModal={openConfirmTripModal}
                            openGuestsModal={openGuestsModal}
                        />
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
                    <InviteGuestsModal
                        addEmailToInvite={addEmailToInvite}
                        closeGuestsModal={closeGuestsModal}
                        emailsToInvite={emailsToInvite}
                        removeEmailFromList={removeEmailFromList}
                    />
                )
            }

            {isConfirmTripModalOpen &&
                (
                    <ConfirmTripModal
                        closeConfirmTripModal={closeConfirmTripModal}
                        createTip={createTip}
                    />
                )
            }

        </div>
    );
}


