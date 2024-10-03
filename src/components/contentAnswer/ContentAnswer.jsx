import React from 'react'

const ContentAnswer = ({ color, letra, respuesta, onClick, handleFlag, status, endgame }) => {
  const incorrect = () => {
    if(status === false)
    {
      handleFlag()
    }
  }
  return (
    <>
        <div onClick={incorrect} className={`px-10 h-[5.8rem] w-[29rem] rounded-3xl text-3xl flex justify-start items-center`} 
        style={endgame===true && status === false ? { backgroundColor: 'black' } : { backgroundColor: color }}>
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