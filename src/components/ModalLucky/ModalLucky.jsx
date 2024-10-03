import React from 'react'
import LuckyBlock from '../LuckyBlock/LuckyBlock';
import { Dialog, DialogBackdrop } from '@headlessui/react';

const ModalLucky = ({ statusModal, closeModal }) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            closeModal()
        }
    };

    return (
        <Dialog open={statusModal} onClose={closeModal} className="relative z-10" onKeyDown={handleKeyDown}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto" onClick={closeModal}>
                <LuckyBlock/>
            </div>
        </Dialog>
    )
}

export default ModalLucky       