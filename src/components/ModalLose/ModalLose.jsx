import { Dialog, DialogBackdrop } from '@headlessui/react';
import React from 'react'

const ModalLose = ({ statusModal, closeModal, handleNavigate }) => {
    const handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ')) {
            closeModal()
            handleNavigate()
        }
    };

    const handleModal = () => {
        closeModal()
        handleNavigate()
    };

    return (
        <Dialog open={statusModal} onClose={closeModal} className="relative z-10" onKeyDown={handleKeyDown}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto" onClick={handleModal}>
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <img src="/cat1L.gif" alt="" className='absolute bottom-0 left-5' />

                    <div className='absolute top-[10rem] right-[37rem] flex flex-col items-center justify-center'>
                        <div className='w-96 h-32 rounded-md font-Queso text-[5rem] bg-white '>
                            Perdiste
                        </div>
                        <img src="/cat2L.gif" alt="" />
                    </div>
                    <img src="/cat1L.gif" alt="" className='absolute bottom-0 right-5' />

                </div>
            </div>
        </Dialog>
    )
}

export default ModalLose