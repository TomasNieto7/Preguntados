import React from 'react'
import ModalWin from '../ModalWin/ModalWin'

const ModalEnd = () => {
    const [statusModal, setStatusModal] = useState(false)

    const closeModal = () => {
      setStatusModal(false)
    }
    const openModal = () => {
      setStatusModal(true)
    }
  return (
    <>
        <ModalWin statusModal={statusModal} closeModal={closeModal}/> 
    </>
  )
}

export default ModalEnd