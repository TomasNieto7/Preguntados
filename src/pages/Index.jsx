import React from 'react'
import preguntones from'../¿PREGUNTONES_.png'

const Index = () => {
  return (
    <>
      <main className="h-screen w-screen bg-radial-gradient from-color1 via-color2 to-color2"> {/*FONDO*/}
        <section className="h-full w-full flex justify-center items-center bg-[url('fondo2.png')]"> {/*FONDO*/}
          <div className="absolute mb-[20rem]"> {/*DIV IMAGEN*/}
            <img src={preguntones} className=""/>{/*IMAGEN*/}
          </div>
          <div className="w-[29rem] h-[27rem] flex flex-col justify-end items-center bg-[#D9D9D9] rounded-lg font-Queso"> {/*DIV BLANCO*/}
            <div className="w-[29rem] h-[10rem] bg-[#D9D9D9] flex justify-start items-start mb-[0.5rem] flex-col px-10 py-10"> {/*DIV NEGRO*/}
              <p className='font-miFuente text-3xl text-left w-full ml-5'>NOMBRE</p>
              <input className='bg-[#F7F7F7] rounded-full w-[374px] h-[60px]'></input>
            </div>
            <button className="bg-[#4F007A] rounded-lg text-white font-miFuente text-2xl w-[15rem] 
            h-[3rem] mb-[3rem] mt-none pt-[4px]"> {/*BOTON */}
              INICIAR JUEGO
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Index
