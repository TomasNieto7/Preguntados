import React, { useEffect, useState } from 'react'
import ContentAnswer from '../components/contentAnswer/ContentAnswer'
import ContentQuestion from '../components/contentQuestion/ContentQuestion'
import ContentScore from '../components/contentScore/ContentScore'
import imagenpuntuaje from '../puntuaje1.png';
import ContentWildcard from '../components/contentWildcard/ContentWildcard';
import ruleta from '../ruleta.png'
import varita from '../varita.png'
import { cuestionario } from '../data/cuestionario';
import Counter from '../components/counter/Counter';
import Imagenes from '../components/imagenes/Imagenes';


const PageInitial = () => {
  const [endgame, setEndgame] = useState(false)
  const [indexCuestionario, setindexCuestionario] = useState(0)
  const [time, setTime] = useState(20)
  const dataCuestionario = cuestionario
  const coloresUno = ["#FFF873", "#6CE6FF"]
  const coloresDos = ["#75FF75", "#FF5050"]
  const letRespuesta = ["A. ", "B. "]
  const letRespuesta2 = ["C. ", "D. "]
  const puntuaje = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const imComodines = ["-1" , varita, ruleta]
  const puntuajes = (index) => {
    let score = index * 5000
    return score
  }
  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US').format(number);
  }
  const handleIndexC = () => {
    if (indexCuestionario < dataCuestionario.length-1)

    {
      //setindexCuestionario(indexCuestionario + 1)
      console.log("aqui aumento");
      
    }    
  }
  const handleClick = () => {
    if (indexCuestionario < dataCuestionario.length-1)

    {
      //setindexCuestionario(indexCuestionario + 1)
      console.log("aqui aumento");
      
    }    
  }
  const handleFlag = () => {
      setEndgame(true)
      console.log(endgame); 
  }
  
  const handleKeyDown = (event) => {
    if ((event.key === 'Enter') && endgame === false){
      handleIndexC()
    }else if ((event.key === 'Enter') && endgame === true){
      console.log("termino");
    }
    if(event.key === 'Enter')
      console.log("picado");
      
      
  }
  useEffect(() => {
    console.log(indexCuestionario);
  }, [indexCuestionario]); 
  return (
    <>
      <main onKeyDown={handleKeyDown} className="h-screen w-screen bg-radial-gradient from-color1 via-color1 to-color2 font-Queso">
        <section className="h-full w-full flex justify-around bg-[url('fondo2.png')]">
          <div className='flex flex-col items-center'>
            <div className='bg-color4 w-36 h-36 absolute rounded-full mr-[59rem] mt-2'>
              <Counter mount={time} index={indexCuestionario}/>
            </div>
            <div className='ml-10 w-[67rem] h-[21.8rem] bg-white mt-10 rounded-3xl flex justify-center'>
              <Imagenes src={'/gatos.jpg'}/>
              <div className='flex justify-center flex-col absolute mr-[56rem] mt-[7.5rem]'>
               {imComodines.map((src,alt, index) => (<ContentWildcard key={index} src={src} alt={`Imagen ${index + 1}`}/>))} 
              </div>
            </div>
            <div className='absolute top-[21rem]'>
              <ContentQuestion pregunta={dataCuestionario[indexCuestionario].pregunta} />
            </div>
            <div className='flex justify-around h-[14rem] ml-10 mt-24 w-[61.2rem]'>
              <div className='flex justify-around flex-col h-full'>
                {coloresUno.map((color, index) => (<ContentAnswer key={index} color={color} letra={letRespuesta[index]} 
                respuesta={dataCuestionario[indexCuestionario].respuestas[index].r1} 
                status={dataCuestionario[indexCuestionario].respuestas[index].flag} handleFlag={handleFlag} onClick={handleClick}
                endgame={endgame}/>))}
              </div>
              <div className='flex justify-around flex-col h-full'>
                {coloresDos.map((color, index) => (<ContentAnswer key={index} color={color} letra={letRespuesta2[index]} 
                respuesta={dataCuestionario[indexCuestionario].respuestas[index + 2].r1} 
                status={dataCuestionario[indexCuestionario].respuestas[index + 2].flag} handleFlag={handleFlag} onClick={handleClick}
                endgame={endgame}/>))}
              </div>
            </div>
          </div>
          <div className='text-6xl tracking-[9.8px] text-[45px] font-medium text-white flex flex-col-reverse justify-start w-80 h-[662px] mt-10 bg-[#190620] rounded-3xl border-yellow-500 border-4'>
            <img
              src={imagenpuntuaje}
              alt="Ejemplo"
              className="w-64 h-auto rounded-lg shadow-lg absolute ml-7 mb-[37rem]"/>
            <div className='mb-4 flex flex-col-reverse items-center'>
              {puntuaje.map((index) => (<ContentScore key={index} score={formatNumber(puntuajes(index))} indexC={indexCuestionario} index={index} />))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PageInitial
