import React, { useEffect, useRef, useState } from 'react'
import ContentAnswer from '../components/contentAnswer/ContentAnswer'
import ContentQuestion from '../components/contentQuestion/ContentQuestion'
import ContentScore from '../components/contentScore/ContentScore'
import imagenpuntuaje from '../puntuaje1.png';
import ContentWildcard from '../components/contentWildcard/ContentWildcard';
import { cuestionario } from '../data/cuestionario';
import Counter from '../components/counter/Counter';
import Imagenes from '../components/imagenes/Imagenes';
import { useNavigate } from 'react-router-dom';
import ModalWin from '../components/ModalWin/ModalWin';
import ModalLose from '../components/ModalLose/ModalLose';


const PageInitial = () => {
  const [contesto, setContesto] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [indexCuestionario, setindexCuestionario] = useState(0)
  const [respuestas50, setRespuestas50] = useState([])
  const [respuestasLB, setRespuestasLB] = useState([])
  const [flagPausa, setFlagPausa] = useState(false)
  const dataCuestionario = cuestionario
  const coloresUno = ["#FFF873", "#6CE6FF"]
  const coloresDos = ["#75FF75", "#FF5050"]
  const letRespuesta = ["A. ", "B. "]
  const letRespuesta2 = ["C. ", "D. "]
  const puntuaje = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const mainRef = useRef(null); // Crear referencia al elemento <main>
  const navigate = useNavigate()
  const [statusModal, setStatusModal] = useState(false)
  const [statusModalLose, setStatusModalLose] = useState(false)

  const closeModal = () => {
    setStatusModal(false)
  }
  const openModal = () => {
    setStatusModal(true)
  }

  const closeModalLose = () => {
    setStatusModalLose(false)
  }
  const openModalLose = () => {
    setStatusModalLose(true)
  }

  const handleNavigate = () => {
    // Navega a la ruta "/about"
    navigate('/');
  };

  const puntuajes = (index) => {
    let score = index * 5000
    return score
  }

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US').format(number);
  }

  const comodin50 = (flag) => {
    if (flag === false) {
      const preguntaActual = dataCuestionario[indexCuestionario]
      const indicesFalse = preguntaActual.respuestas
        .map((respuesta, index) => (respuesta.flag === false ? index : null)) // Crear un array con índices o null si no cumple
        .filter(index => index !== null); // Filtrar los null
      setRespuestas50(getRandomArray(indicesFalse))
    }
  }

  const comodinLB = (indice, flag) => {
    if (flag === false) {
      const preguntaActual = dataCuestionario[indexCuestionario]
      const indicesFalse = preguntaActual.respuestas
        .map((respuesta, index) => (respuesta.flag === false ? index : null)) // Crear un array con índices o null si no cumple
        .filter(index => index !== null); // Filtrar los null
      setRespuestasLB(getRandomArrayLB(indicesFalse, indice))
    }
  }

  function getRandomArrayLB(arr, numIndices) {
    if (arr.length < numIndices) {
      throw new Error(`El array debe contener al menos ${numIndices} elementos`);
    }

    // Crear una copia del array original para no modificarlo
    const copy = [...arr];
    const result = [];

    // Seleccionar elementos aleatorios hasta tener 'numIndices' elementos
    for (let i = 0; i < numIndices; i++) {
      const randomIndex = Math.floor(Math.random() * copy.length);
      const randomElement = copy.splice(randomIndex, 1)[0];  // Remover el elemento seleccionado del array original
      result.push(randomElement);  // Añadir el elemento seleccionado al array resultado
    }

    return result;  // Devolver el nuevo array con el número deseado de elementos
  }

  function getRandomArray(arr) {
    if (arr.length !== 3) {
      throw new Error("El array debe contener exactamente 3 elementos");
    }
    // Crear una copia del array original para no modificarlo
    const copy = [...arr];
    // Elegir un elemento aleatorio y removerlo del array
    const randomElement1 = copy.splice(Math.floor(Math.random() * copy.length), 1)[0];
    // Elegir otro elemento aleatorio del array reducido
    const randomElement2 = copy.splice(Math.floor(Math.random() * copy.length), 1)[0];
    // Devolver el nuevo array con 2 elementos
    return [randomElement1, randomElement2];
  }


  const handleIndexC = () => {
    if (indexCuestionario < dataCuestionario.length - 1) {
      setindexCuestionario(indexCuestionario + 1)
      setRespuestas50([])
      setRespuestasLB([])
    } else {
      setFlagPausa(true)
      openModal()
    }
  }

  const handleFlag = () => {
    setContesto(true)
    console.log("contesto");
  }

  const handleEndGame = () => {
    setEndGame(true)
  }

  const handleKeyDown = (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && contesto === true && endGame === false) {
      setContesto(false)
      handleIndexC()
    } else if ((event.key === 'Enter' || event.key === ' ') && endGame === true) {
      openModalLose()
    }
  }
  useEffect(() => {
    console.log(indexCuestionario);
  }, [indexCuestionario]);

  useEffect(() => {
    console.log(indexCuestionario);

    // Enfocar el elemento <main> cuando se cargue el componente
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [indexCuestionario]);
  return (
    <>
      <main ref={mainRef} onKeyDown={handleKeyDown} tabIndex={0} className="h-screen w-screen bg-radial-gradient from-color1 via-color1 to-color2 font-Queso">
        <section className="h-full w-full flex justify-around bg-[url('fondo2.png')]">
          <div className='flex flex-col items-center'>
            <div className='bg-color4 w-36 h-36 absolute rounded-full mr-[59rem] mt-2'>
              <Counter mount={30} flag={contesto} index={indexCuestionario} handleEndGame={handleEndGame} flagPausa={flagPausa} />
            </div>
            <div className='ml-10 w-[67rem] h-[21.8rem] bg-white mt-10 rounded-3xl flex justify-center'>
              <Imagenes src={'/gatos.jpg'} />
              <div className='flex justify-center flex-col absolute mr-[56rem] mt-[7.5rem]'>
                <ContentWildcard comodin50={comodin50} comodinLB={comodinLB} setFlagPausa={setFlagPausa} setEndGame={setEndGame} />
              </div>
            </div>
            <div className='absolute top-[21rem]'>
              <ContentQuestion pregunta={dataCuestionario[indexCuestionario].pregunta} />
            </div>
            <div className='flex justify-around h-[14rem] ml-10 mt-24 w-[61.2rem]'>
              <div className='flex justify-around flex-col h-full'>
                {coloresUno.map((color, index) => (<ContentAnswer key={index} color={color} letra={letRespuesta[index]}
                  respuesta={dataCuestionario[indexCuestionario].respuestas[index].r1}
                  status={dataCuestionario[indexCuestionario].respuestas[index].flag} handleFlag={handleFlag} handleEndGame={handleEndGame}
                  contestoFlag={contesto} respuestas50={respuestas50} indexR={index} respuestasLB={respuestasLB} />))}
              </div>
              <div className='flex justify-around flex-col h-full'>
                {coloresDos.map((color, index) => (<ContentAnswer key={index} color={color} letra={letRespuesta2[index]}
                  respuesta={dataCuestionario[indexCuestionario].respuestas[index + 2].r1}
                  status={dataCuestionario[indexCuestionario].respuestas[index + 2].flag} handleFlag={handleFlag} handleEndGame={handleEndGame}
                  contestoFlag={contesto} respuestas50={respuestas50} indexR={index + 2} respuestasLB={respuestasLB} />))}
              </div>
            </div>
          </div>
          <div className='text-6xl tracking-[9.8px] text-[45px] font-medium text-white flex flex-col-reverse justify-start w-80 h-[662px] mt-10 bg-[#190620] rounded-3xl border-yellow-500 border-4'>
            <img
              src={imagenpuntuaje}
              alt="Ejemplo"
              className="w-64 h-auto rounded-lg shadow-lg absolute ml-7 mb-[37rem]" />
            <div className='mb-4 flex flex-col-reverse items-center'>
              {puntuaje.map((index) => (<ContentScore key={index} score={formatNumber(puntuajes(index))} indexC={indexCuestionario} index={index} />))}
            </div>
          </div>
        </section>
        <ModalWin statusModal={statusModal} closeModal={closeModal} handleNavigate={handleNavigate}/>
        <ModalLose statusModal={statusModalLose} closeModal={closeModalLose} handleNavigate={handleNavigate}/>
      </main>
    </>
  )
}

export default PageInitial
