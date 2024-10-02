import React from 'react'

const ContentWildcard = ({ src, alt }) => {
  return (
    <>
      <div className='w-[8rem] h-12 mt-[4px] border-[#6A175E] border-[4px] rounded-3xl flex justify-center items-center'>
        { src === "-1" ? (
          <div className='text-[1.6rem]'>
            50:50
          </div>
        ):
          <img
            src={src}
            alt={alt}
            className="object-cover w-8 h-8 rounded-lg mx-auto"
          />
        }
      </div>
    </>
  )
}

export default ContentWildcard