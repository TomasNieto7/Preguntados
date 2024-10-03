import React from 'react'
import preguntones from'../¿PREGUNTONES_.png'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    // Navega a la ruta "/about"
    navigate('/PageInitial');
  };
  return (
    <>
      <main className="h-screen w-screen bg-radial-gradient from-color1 via-color2 to-color2"> {/*FONDO*/}
        <section className="h-full w-full flex justify-center items-center bg-[url('fondo2.png')]"> {/*FONDO*/}
          <div className="absolute mb-[20rem]"> {/*DIV IMAGEN*/}
            <img src={preguntones} className=""/>{/*IMAGEN*/}
          </div>
          <div className="w-[29rem] h-[27rem] flex flex-col justify-end items-center bg-[#D9D9D9] rounded-lg font-Queso"> {/*DIV BLANCO*/}
            <button onClick={handleNavigate}  className="bg-[#4F007A] rounded-lg text-white font-miFuente text-2xl w-[15rem] 
            h-[5rem] mb-28 mt-none pt-[4px]">
              INICIAR JUEGO
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Index
