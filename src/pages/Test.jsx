import React, { useState } from 'react'
import GatoBrujo from '../components/GatoBrujo/GatoBrujo'
import GatoBrujoElection from '../components/GatoBrujoElection/GatoBrujoElection'
import ModalLucky from '../components/ModalLucky/ModalLucky';

const Test = () => {
    // const opciones = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];
    const [statusModal, setStatusModal] = useState(false)
    const [statusModal2, setStatusModal2] = useState(false)
    const [statusModal3, setStatusModal3] = useState(false)
    const closeModal = () => {
        setStatusModal(false)
    }
    const openModal2 = () => {
        setStatusModal2(true)
    }
    const closeModal2 = () => {
        setStatusModal2(false)
    }
    const closeModal3 = () => {
        setStatusModal3(false)
    }

    return (
        <>
            <div className='flex flex-col'>
                <h1>Hola</h1>
                <button onClick={() => setStatusModal(true)}>Modal</button>
                <GatoBrujo statusModal={statusModal} closeModal={closeModal} openModal2={openModal2} />
                <GatoBrujoElection statusModal={statusModal2} closeModal={closeModal2} />
                <button onClick={() => setStatusModal3(true)}>LuckyBlock</button>
                <ModalLucky statusModal={statusModal3} closeModal={closeModal3} />
            </div>
        </>
    )
}

export default Test