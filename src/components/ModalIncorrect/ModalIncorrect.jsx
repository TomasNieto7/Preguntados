import { Dialog, DialogBackdrop } from '@headlessui/react';
import React from 'react'

const ModalIncorrect = ({ statusModal, closeModal,  }) => {
    const handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ')) {
            closeModal()
        }
    };

    const handleModal = () => {
        closeModal()
    };

    return (
        <Dialog open={statusModal} onClose={closeModal} className="relative z-10" onKeyDown={handleKeyDown}>
            <DialogBackdrop
                transition
                className="fixed inset-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto" onClick={handleModal}>
                <div className="flex min-h-full items-center justify-start p-4 text-center sm:items-center sm:p-0 flex-col">
                    <img src="/catIncorrect.gif" alt="" className=''/>
                    <div className='w-96 h-32 rounded-md flex items-center justify-center font-Queso text-[2rem] bg-white border-black border-4'>
                        Incorrect
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalIncorrect