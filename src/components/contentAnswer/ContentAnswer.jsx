import React from 'react'

const ContentAnswer = ({ color, letra, respuesta, handleFlag, status, handleEndGame, contestoFlag }) => {
  const contesto = () => {
    if (contestoFlag === false) {
      handleFlag()
    }
    if (status === false && contestoFlag === false) {
      handleEndGame()
      alert("Incorrecto")
    }
    if (status === true && contestoFlag === false) {
      alert("Correcto")
    }
  }
  return (
    <>
      <div onClick={contesto} className={`px-10 h-[5.8rem] w-[29rem] rounded-3xl text-3xl flex justify-start items-center`}
        style={contestoFlag === true && status === false ? { backgroundColor: 'black' } : { backgroundColor: color }}>
        <div>
          {letra}
        </div>
        <div>
          {respuesta}
        </div>
      </div>
    </>
  )
}

export default ContentAnswer