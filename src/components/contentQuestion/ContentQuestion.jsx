import React from 'react'

const ContentQuestion = ({pregunta}) => {
  return (
    <>
        <div className='text-3xl text-center shadow-[0px_-15px_35px_-15px_rgba(0,0,0,0.3)] ml-10 w-[67rem] bg-white h-[8rem] rounded-full border-purple-800 border-4 flex justify-center items-center'>
          {pregunta}
        </div>
    </>
  )
}

export default ContentQuestion