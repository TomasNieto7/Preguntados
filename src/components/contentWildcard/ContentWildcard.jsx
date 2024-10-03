import React from 'react'
import ruleta from '../../img/ruleta.png'
import varita from '../../img/varita.png'

const ContentWildcard = () => {
  return (
    <>
      <div className='w-[8rem] h-12 mt-[4px] border-[#6A175E] border-[4px] rounded-3xl flex justify-center items-center'>
        <div className='text-[1.6rem]'>
          50:50
        </div>
      </div>
      <div className='w-[8rem] h-12 mt-[4px] border-[#6A175E] border-[4px] rounded-3xl flex justify-center items-center'>
        <img
          src={varita}
          alt=""
          className="object-cover w-8 h-8 rounded-lg mx-auto"
        />
      </div>
      <div className='w-[8rem] h-12 mt-[4px] border-[#6A175E] border-[4px] rounded-3xl flex justify-center items-center'>
        <img
          src={ruleta}
          alt=""
          className="object-cover w-8 h-8 rounded-lg mx-auto"
        />
      </div>
    </>
  )
}

export default ContentWildcard