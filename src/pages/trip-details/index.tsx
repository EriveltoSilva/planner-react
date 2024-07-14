import { useState } from "react";

// Modals
import { CreateActivityModal } from "./create-activity-modal";

// Page Components
import { ActivityList } from "./activities-list";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { GuestsList } from "./guests";
import { ImportantLinks } from "./important-links";


import { Plus } from "lucide-react";


export function TripDetailsPage() {
    const [isCreateActivityOpen, setIsCreateActivityOpen] = useState<boolean>(false);

    const openCreateActivityModal = () => {
        setIsCreateActivityOpen(true);
    };

    const closeCreateActivityModal = () => {
        setIsCreateActivityOpen(false);
    };

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />
            <main className="flex gap-16 px-6">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl text-zinc-50 font-semibold">Atividades</h2>
                        <button onClick={openCreateActivityModal} className="bg-lime-300 hover:bg-lime-400 text-lime-950  rounded-lg py-2 px-5 font-medium flex items-center gap-2">
                            <Plus className="size-5" />
                            Cadastrar atividade
                        </button>
                    </div>
                    <ActivityList />
                </div>


                <div className="w-80 space-y-6">
                    <ImportantLinks />
                    <div className='w-full h-px bg-zinc-800' />
                    <GuestsList />
                </div>
            </main>

            {isCreateActivityOpen && <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />}
        </div>
    );
}
