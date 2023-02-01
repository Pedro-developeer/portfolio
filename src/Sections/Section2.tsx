import android from '../images/android.svg'
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from "aos"

export const Section2 = () => {

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })
    
  }, [])

  return (
    <div id="section2" className='
    
    text-white md:h-screen md:py-0 w-full font-sf bg-secondary-100 flex md:items-center justify-around md:pr-20
    py-40 md:px-0 px-10
    '>

      <div data-aos="fade-up" className='
      2xl:w-[40rem] 2xl:gap-8 
      w-96 h-3/4 flex flex-col justify-center gap-6

      '>

        <h1 className='
        2xl:text-7xl 
        text-4xl font-bold
        '>About Me</h1>
        <p className='
        2xl:text-4xl
        text-quaternary-100
        text-lg
        '>My name is Pedro Henrique and I am a mobile developer specialized in Flutter.</p>
        <p className='text-quaternary-100 2xl:text-4xl text-lg'>I am 20 years old and passionate about technology and app development. I have advanced programming skills and experience in mobile app development, including creating attractive user interfaces and robust functionality.</p>

      </div>

      <div data-aos="fade-up" className='
      2xl:w-[38rem] 2xl:h-[32rem]
      w-72 h-3/4 md:flex items-center justify-center
      hidden
       '>
        <img src={android} alt="" className="2xl:w-full 2xl:h-full w-60 h-60"/>
      </div>

    </div>
  )
}
