import React, { useState } from 'react'
import GatoBrujo from '../components/GatoBrujo/GatoBrujo'
import GatoBrujoElection from '../components/GatoBrujoElection/GatoBrujoElection'

const Test = () => {
    const [statusModal, setStatusModal] = useState(false)
    const [statusModal2, setStatusModal2] = useState(false)
    const closeModal = () => {
        setStatusModal(false)
    }
    const openModal2 = () => {
        setStatusModal2(true)
    }
    const closeModal2 = () => {
        setStatusModal2(false)
    }

    return (
        <>
            <h1>Hola</h1>
            <button onClick={() => setStatusModal(true)}>Modal</button>
            <GatoBrujo statusModal={statusModal} closeModal={closeModal} openModal2={openModal2}/>
            <GatoBrujoElection statusModal={statusModal2} closeModal={closeModal2} />
        </>
    )
}

export default Test