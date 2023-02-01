import { useState } from "react"
import info from '../utils/info'
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from "aos"

interface IinfoProps {
  title: string
  description: string
  date: string
}

export const Section3 = () => {

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })
    
  }, [])

  const [list,] = useState(["Kiwi Manga", "Megaleios", "Ubistart", "PetWiz"])
  const [position, setPosition] = useState('1.5')

  const infoList: IinfoProps[] = info

  return (
    <div id="section3" className='

    text-white md:h-screen w-full md:py-0 md:px-0 px-6 font-sf pt-10 bg-primary-100 flex flex-col md:justify-around md:gap-0
    gap-10 py-15
    '>

      <h1 data-aos="fade-up" className='
      2xl:text-7xl 2xl:w-3/4 2xl:mx-auto 2xl:pt-24
      text-4xl font-bold
      md:mx-auto md:w-3/4
      '>Works</h1>

      <div data-aos="fade-up" className="
      2xl:mx-auto
      md:mx-auto
      md:w-3/4 md:h-3/4 flex items-center md:flex-row md:gap-20
      flex-col w-full gap-5
      ">

        <div className='
        2xl:h-[30rem] 2xl:w-[24rem]
        bg-[#141414] md:h-64 md:w-44 rounded-lg relative
        w-full h-72
        '>

          {
            position == '1.5' ? <div className="
            2xl:h-16 2xl:top-[1.9rem]
            absolute md:top-[1.5rem] left-[-0.125rem] w-[0.20rem] h-10 bg-tertiary-100 rounded-lg z-10
            top-[1.6rem]
            "></div> :
              position == '5.0' ? <div className="
              2xl:h-16 2xl:top-[9.1rem]
              absolute md:top-[4.9rem] left-[-0.125rem] w-[0.20rem] h-10 bg-tertiary-100 rounded-lg z-10
              top-[5.5rem]
              "></div> :
                position == '8.5' ? <div className="
                2xl:h-16 2xl:top-[15.9rem]
                absolute md:top-[8.5rem] left-[-0.125rem] w-[0.20rem] h-10 bg-tertiary-100 rounded-lg z-10
                top-[9.6rem]
                "></div> :
                  position == '12.0' ? <div className="
                  2xl:h-16 2xl:top-[23.2rem]
                  absolute md:top-[12.0rem] left-[-0.125rem] w-[0.20rem] h-10 bg-tertiary-100 rounded-lg z-10
                  top-[13.7rem]
                  "></div> : ''
          }

          { /* Kiwi Manga: 1.5 / Megaleios: 5.0rem / Ubistart: 8.5rem / PetWiz: 12.0rem */}

          <ul className="
           2xl:text-4xl 2xl:px-10
           flex flex-col md:px-6 py-4 w-full h-full justify-around text-quaternary-100 text-xl
           px-9
           ">
            {
              list.map((item, index) => (
                <li
                  key={index}
                  className={
                    position == '1.5' && item == 'Kiwi Manga' ? 'text-white cursor-pointer font-bold' :
                      position == '5.0' && item == 'Megaleios' ? 'text-white cursor-pointer font-bold' :
                        position == '8.5' && item == 'Ubistart' ? 'text-white cursor-pointer font-bold' :
                          position == '12.0' && item == 'PetWiz' ? 'text-white cursor-pointer font-bold' : '' + 'md:cursor-pointer'
                  }
                  onClick={() => {
                    if (item == 'Kiwi Manga') setPosition('1.5')
                    else if (item == 'Megaleios') setPosition('5.0')
                    else if (item == 'Ubistart') setPosition('8.5')
                    else if (item == 'PetWiz') setPosition('12.0')
                  }}
                >
                  {item}
                </li>
              ))
            }

          </ul>

        </div>

        <div className="
        2xl:h-[30rem] 2xl:px-10
        flex-1 md:w-44 h-60 py-5 flex flex-col justify-between md:gap-0
        w-full gap-5
        ">

          <div className="flex justify-between">

            <h2 className="
            2xl:text-4xl
            text-white text-lg font-bold">Mobile Developer</h2>

            <span className="
            2xl:text-4xl
            text-[#B3B3B3]">
              {

                position == '1.5' ? infoList[0].date :
                  position == '5.0' ? infoList[1].date :
                    position == '8.5' ? infoList[2].date :
                      position == '12.0' ? infoList[3].date : ''

              }
            </span>

          </div>

          <span className="
          2xl:text-4xl
          text-[#6C63FF]">

            {

              position == '1.5' ? infoList[0].title :
                position == '5.0' ? infoList[1].title :
                  position == '8.5' ? infoList[2].title :
                    position == '12.0' ? infoList[3].title : ''

            }

          </span>

          <p className="
          2xl:text-3xl
          text-quaternary-100">

            {
              position == '1.5' ? infoList[0].description :
                position == '5.0' ? infoList[1].description :
                  position == '8.5' ? infoList[2].description :
                    position == '12.0' ? infoList[3].description : ''
            }

          </p>

        </div>

      </div>

    </div>
  )
}
