import React from 'react'

const ContentAnswer = ({ color, letra, respuesta, handleFlag, status, handleEndGame, contestoFlag, respuestas50, indexR, respuestasLB, openModalCorrect, openModalIncorrect }) => {
  const contesto = () => {
    if (contestoFlag === false) {
      handleFlag()
    }
    if (status === false && contestoFlag === false) {
      handleEndGame()
      openModalIncorrect()
    }
    if (status === true && contestoFlag === false) {
      openModalCorrect()
    }
  }
  return (
    <>
      <div onClick={contesto} className={`px-10 h-[5.8rem] w-[29rem] rounded-3xl text-3xl flex justify-start items-center`}
        style={(contestoFlag === true && status === false) || respuestas50.includes(indexR) || respuestasLB.includes(indexR) ? { backgroundColor: 'black' } : { backgroundColor: color }}>
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