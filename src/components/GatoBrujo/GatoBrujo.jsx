'use client'

import { Dialog, DialogBackdrop } from '@headlessui/react'
import gato from '../../img/gatoBrujo.png'
import { useEffect, useState } from 'react';

export default function GatoBrujo({ statusModal, closeModal, openModal2 }) {
    const texto = 'Enhorabuena, aprendiz del arcano! Habéis logrado convocarme, y os prestaré mi sabiduría para desentrañar este acertijo. Ahora dime, ¿cuál será el elixir que elegirás para vuestras artes? Pero cuidado, podría ser tu perdición y el fin de tu travesía.';
    const [textoMostrado, setTextoMostrado] = useState('');
    const [index, setIndex] = useState(0); // manejamos el índice por separado
    const [msText, setMstext] = useState(50);
    const [msTriangulo, setMsTriangulo] = useState(16600);
    const [flagEnter, setFlagEnter] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, msTriangulo); // 1000ms = 1 segundo

        return () => clearTimeout(timer); // Limpiar el temporizador en desmontaje
    }, [msTriangulo]);

    useEffect(() => {
        if (index < texto.length) {
            const intervalo = setInterval(() => {
                setTextoMostrado((valorAnterior) => valorAnterior + texto[index]);
                setIndex(index + 1);
            }, msText); // Velocidad de escritura (ms)

            return () => clearInterval(intervalo); // Limpiamos el intervalo después de cada actualización
        } else setFlagEnter(true)
    }, [index, texto, msText]);

    const handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && flagEnter === false) {
            setMsTriangulo(0)
            setMstext(0)
            setFlagEnter(true)
        } else if ((event.key === 'Enter' || event.key === ' ') && flagEnter === true) {
            closeModal()
            openModal2()
        }
    };

    const handleModal = () => {
        closeModal()
        openModal2()
    };

    return (
        <Dialog open={statusModal} onClose={closeModal} className="relative z-10" onKeyDown={handleKeyDown}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black bg-opacity-85 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto" onClick={handleModal}>
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className='flex w-full justify-end'>
                        <div className='w-[50rem] h-96 bg-white absolute top-16 left-16 rounded-xl border-black border-8 z-20 flex flex-col justify-between items-center'>
                            <div className='w-[45rem] h-auto flex items-center pt-4'>
                                <p className='font-bahianita text-[2.8rem]'>{textoMostrado}</p>
                            </div>
                            <div className='w-full flex justify-end h-20 items-center'>
                                <div className='w-24 flex justify-center'>
                                    {isVisible && (
                                        <div className="w-0 h-0 m-0 p-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-l-[40px] border-l-black animate-blink transition-opacity duration-500 opacity-0"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='w-[50rem] h-96 bg-white absolute top-16 left-16 rounded-xl border-black border-8'></div>
                        <div className="w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-l-[185px] border-l-white absolute top-[27rem] right-[40rem] rotate-[28deg] z-10"></div>
                        <img src={gato} alt="" className='h-[61rem] w-[61rem]' />
                    </div>

                </div>
            </div>
        </Dialog>
    )
}