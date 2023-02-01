import { Navbar } from "../components/Navbar"
import triangle from "../images/triangle.svg"
import square from "../images/square.svg"
import Typewriter from 'typewriter-effect'
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from "aos"

export const Section1 = () => {

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })
    
  }, [])

  return (
    <div id="section1" className="h-screen bg-primary-100 pt-14 px-12 relative">
      <Navbar />

      <div className="w-3/4 h-3/4 mt-8 m-auto flex font-sf text-white">

        <div data-aos="fade-up" className="w-[25%] flex items-start justify-center">
          <img src={triangle} alt="" className="mr-8 hidden md:block md:animate-float" />
        </div>

        <div data-aos="fade-up" className="w-[50%] flex flex-col items-center justify-center">
          <h1 className="
          2xl:text-7xl 
          md:text-5xl md:w-96
          text-4xl w-72 font-bold text-center
          ">Hey, I'm Pedro</h1>
          <span
            className="
          2xl:text-xl 
          mt-3 mb-10 w-60 text-center text-sm text-quaternary-100
          ">
            <Typewriter
              options={{
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Empowering your world through mobile tecnology')
                .start()
              }}
            />
          </span>

          <button className="
          2xl:text-xl 2xl:w-[28rem] 2xl:h-20
          md:w-80 rounded-sm h-12 bg-tertiary-100
          w-64 transform hover:scale-105 transition-all duration-300 ease-in
          "
          onClick={() => {
            window.open('https://www.linkedin.com/in/pedro-developeer/')
          }}
          >See my LinkedIn profile</button>
        </div>

        <div data-aos="fade-up" className="w-[25%] h-[calc(100%+35px)] flex items-end justify-center">
          <img src={square} alt="" className="hidden md:block md:animate-float" />
        </div>

      </div>

    </div>
  )
}
