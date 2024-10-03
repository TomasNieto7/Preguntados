import React, { useState } from 'react'
import ruleta from '../../img/ruleta.png'
import varita from '../../img/varita.png'
import GatoBrujo from '../GatoBrujo/GatoBrujo'
import GatoBrujoElection from '../GatoBrujoElection/GatoBrujoElection'
import ModalLucky from '../ModalLucky/ModalLucky'

const ContentWildcard = ({ comodin50, comodinLB, setFlagPausa, setEndGame, openModalLose, openModalWin }) => {
  const [statusModal, setStatusModal] = useState(false)
  const [statusModal2, setStatusModal2] = useState(false)
  const [statusModal3, setStatusModal3] = useState(false)
  const [flagModalLB, setFlagModalLB] = useState(false)
  const [flagModalMago, setFlagModalMago] = useState(false)
  const [flagModal50, setFlagModal50] = useState(false)
  const closeModal = () => {
    setStatusModal(false)
  }
  const openModal2 = () => {
    setStatusModal2(true)
  }
  const openModal3 = () => {
    if (flagModalLB === false) {
      setStatusModal3(true)
      setFlagPausa(true)
      setFlagModalLB(true)
    }
  }
  const openModalMago = () => {
    if (flagModalMago === false) {
      setStatusModal(true)
      setFlagModalMago(true)
      setFlagPausa(true)
    }
  }
  const openModal50 = () => {
    if (flagModal50 === false) {
      comodin50(flagModal50)
      setFlagModal50(true)
    }
  }
  const closeModal2 = () => {
    setStatusModal2(false)
    setFlagPausa(false)
  }
  const closeModal3 = () => {
    setStatusModal3(false)
    setFlagPausa(false)
  }
  return (
    <>
      <div onClick={openModal50} className={`w-[8rem] h-12 mt-[4px] border-[#6A175E] border-[4px] rounded-3xl flex justify-center items-center 
        select-none ${flagModal50 && 'opacity-20'}`}>
        <div className='text-[1.6rem]'>
          50:50
        </div>
      </div>
      <div onClick={openModalMago} className={`w-[8rem] h-12 mt-[4px] border-[#6A175E] border-[4px] rounded-3xl flex justify-center items-center 
        select-none ${flagModalMago && 'opacity-20'}`}>
        <img
          src={varita}
          alt=""
          className="object-cover w-8 h-8 rounded-lg mx-auto"
        />
        <GatoBrujo statusModal={statusModal} closeModal={closeModal} openModal2={openModal2} />
        <GatoBrujoElection statusModal={statusModal2} closeModal={closeModal2} setEndGame={setEndGame} setFlagModalLB={setFlagModal50} 
        setFlagModal50={setFlagModal50} openModalLose={openModalLose} openModalWin={openModalWin}/>
      </div>
      <div onClick={openModal3} className={`w-[8rem] h-12 mt-[4px] border-[#6A175E] border-[4px] rounded-3xl flex justify-center items-center 
        select-none ${flagModalLB && 'opacity-20'}`}>
        <img
          src={ruleta}
          alt=""
          className="object-cover w-8 h-8 rounded-lg mx-auto"
        />
        <ModalLucky statusModal={statusModal3} closeModal={closeModal3} comodinLB={comodinLB} />
      </div>
    </>
  )
}

export default ContentWildcard