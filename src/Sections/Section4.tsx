import apple from '../images/apple.svg'
import android from '../images/android-4.svg'
import flutter from '../images/flutter.svg'
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from "aos"

export const Section4 = () => {

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })
    
  }, [])

  return (
    <div id="section4" className='
    text-white md:h-screen w-full font-sf md:py-0 bg-secondary-100 flex flex-col gap-20 items-center justify-center
    py-40 md:px-0 px-5
    '>

      <h1 data-aos="fade-up" className='
      2xl:text-7xl 
      md:text-4xl md:w-2/4 text-center font-bold
      text-2xl
      '>Developing mobile solutions for Android, iOS and Flutter.</h1>
      <div data-aos="fade-up" className='
      w-full h-24 flex justify-center gap-16 md:px-0
      
      '>

        <div className='
        md:w-28 md:h-28 rounded-full bg-[#1E1E1E] flex items-center justify-center 
        w-[4.5rem] h-[4.5rem]
        '>
          <img src={flutter} alt="" className='
          md:w-14 md:h-14 mr-3
          w-9 h-9
          '/>
        </div>
        <div className='
        md:w-28 md:h-28 rounded-full bg-[#1E1E1E] flex items-center justify-center
        w-[4.5rem] h-[4.5rem]
        '>
          <img src={android} alt="" className='
          md:w-28 md:h-28 mb-8
          w-20 h-20 
          '/>
        </div>
        <div className='
        md:w-28 md:h-28 rounded-full bg-[#1E1E1E] flex items-center justify-center
        w-[4.5rem] h-[4.5rem]
        '>
          <img src={apple} alt="" className='
          md:w-20 md:h-16 mb-2
          w-12 h-10
          '/>
        </div>

      </div>

    </div>
  )
}
