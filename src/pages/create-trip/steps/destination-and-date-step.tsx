import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDataStepProps {
    isGuestsInputOpen: boolean,
    openGuestsInput: () => void,
    closeGuestsInput: () => void,
}

export function DestinationAndDataStep({ isGuestsInputOpen, openGuestsInput, closeGuestsInput }: DestinationAndDataStepProps) {
    return (
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
    );
}