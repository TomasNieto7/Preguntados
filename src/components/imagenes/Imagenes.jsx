import React from 'react'


const Imagenes = ({src}) => {
    return (
        <>
            <div className='w-96 h-84 mt-4 select-none'>
            <img
              src= {src}
              alt=''
              className="object-cover w-96 h-96 rounded-lg mx-auto"
            />
            </div>
        </>
    )
}

export default Imagenes
