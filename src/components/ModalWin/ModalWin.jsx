import { Dialog, DialogBackdrop } from '@headlessui/react';
import React from 'react'

const ModalWin = ({ statusModal, closeModal, handleNavigate }) => {
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
                    <img src="/cat2.gif" alt="" className='absolute top-10 left-30'/>
                    <img src="/cat5.gif" alt="" className='absolute top-10 left-6'/>
                    <img src="/cat3.gif" alt="" className='absolute bottom-10 left-6'/>
                    <div className='w-96 h-32 rounded-md flex items-center justify-center font-Queso text-[2rem] bg-white'>
                        Felicidades has ganado! 50000 pejecoins!!
                    </div>
                    <img src="/cat1.gif" alt="" className='absolute top-10 right-6'/>
                    <img src="/cat4.gif" alt="" className='absolute bottom-10 right-6'/>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalWin