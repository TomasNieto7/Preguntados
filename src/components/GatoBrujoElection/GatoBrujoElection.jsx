'use client'

import { Dialog, DialogBackdrop } from '@headlessui/react'
import gato from '../../img/gatoBrujo.png'
import manoR from '../../img/manoR.png'
import manoI from '../../img/manoIzq.png'
import pocionR from '../../img/pocionR.png'
import pocionI from '../../img/pocionIzq.png'

export default function GatoBrujoElection({ statusModal, closeModal }) {

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
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className='flex w-full justify-center'>
                        <div className=''>
                            <img src={manoR} alt="" className='h-[22rem] w-[22rem] absolute bottom-[8rem] left-[15rem] z-10 ' />
                            <img src={pocionR} alt="" className='h-[30rem] w-[30rem] absolute top-[18rem] left-[10rem] z-20 animate-bounce' />
                        </div>
                        <img src={gato} alt="" className='h-[61rem] w-[61rem]' />
                        <div className=''>
                            <img src={manoI} alt="" className='h-[22rem] w-[22rem] absolute bottom-[3rem] right-[19rem] z-10 ' />
                            <img src={pocionI} alt="" className='h-[30rem] w-[30rem] absolute bottom-[8rem] right-[15rem] z-20 animate-bounce' />
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

// rotate-[28deg]