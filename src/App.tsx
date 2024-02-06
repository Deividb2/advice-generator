import { useEffect, useState } from 'react'
import axios from 'axios'

// imgs
import imgLine from '../public/images/pattern-divider.svg'
import imgGenerator from '../public/images/icon-dice.svg'

export default function App() {

  const [advice, setAdvice] = useState('')
  const [id, setId] = useState()

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice')
      const advice = response.data.slip.advice
      const id = response.data.slip.id
      setAdvice(advice)
      setId(id)


    } catch (error) {
      console.error("Erro ao buscar conselho: ", error)
    }
  }

  useEffect(() => {
    fetchData()
  })




  return (
    <>
      <main className="w-screen min-h-screen flex justify-center items-center px-4 text-[#cee3e9] text-center">
        <section className="flex flex-col items-center min-h-[40vh] max-w-[30rem] py-4 px-2 bg-[#323a49] rounded-lg md:px-4 md:py-6">
          <h3 className="text-[#52ffa8] font-bold text-xs uppercase tracking-advice">Advice {`#${id}`}</h3>
          <h2 className="text-[#cee3e9] font-semibold text-lg py-5 pb-5 md:text-2xl min-h-[20vh]">
            {`"${advice}"`}
          </h2>

          <div className="flex justify-center items-center gap-2">
            <hr className="w-[35%]" />
            <img src={imgLine} alt="imagem de enfeite" />
            <hr className="w-[35%]" />
          </div>

          <button className="rounded-full p-4 bg-[#52ffa8] relative top-12 sombraButton" onClick={fetchData}>
            <img src={imgGenerator} alt="imagem que ilustra o geramento de um conselho" className='w-[1.3rem]' />
          </button>
        </section>
      </main>
    </>
  )
}