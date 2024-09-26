import React from 'react'
import ContentAnswer from '../components/contentAnswer/ContentAnswer'


const PageInitial = () => {
  const respuestas = [1, 2]
  return (
    <>
      <main className="h-screen w-screen bg-radial-gradient from-color1 via-color2 to-color2">
        <section className="h-full w-full flex justify-around bg-[url('fondo2.png')]">
          <div>
            <div className='ml-10 w-[67rem] h-[21.8rem] bg-white mt-10 rounded-3xl'>

            </div>
            <div className='flex justify-around h-96'>
              <div className='flex justify-around flex-col h-full'>
                {respuestas.map((index) => <ContentAnswer />)}
              </div>
              <div className='flex justify-around flex-col h-full'>
                {respuestas.map((index) => <ContentAnswer />)}
              </div>
            </div>
          </div>
          <div className='w-80 h-[650px] mt-10 bg-[#190620] rounded-3xl border-yellow-500 border-4'>

          </div>
        </section>
      </main>
    </>
  )
}

export default PageInitial
