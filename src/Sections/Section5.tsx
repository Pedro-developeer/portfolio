import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from "aos"

export const Section5 = () => {

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })

  }, [])

  return (
    <div id="section5" className='
    text-white md:h-screen w-full font-sf md:py-0 bg-primary-100 flex flex-col md:gap-20 items-center justify-center
    gap-10 py-40
    '>
      <h1 data-aos="fade-up" className='2xl:text-5xl 
      md:text-4xl md:w-[26rem] text-center
      text-2xl
      '>Impressed by my work? Let's work together!</h1>

      <div data-aos="fade-up">
        <button  className='
      md:h-16 md:w-96 bg-tertiary-100 rounded-md font-bold md:text-xl
      w-64 h-12 text-lg transform hover:scale-105 transition-all duration-300 ease-in
      '><a href="mailto:pedroprogrammer@proton.me">Contact Me</a>
        </button>
      </div>

    </div>
  )
}
