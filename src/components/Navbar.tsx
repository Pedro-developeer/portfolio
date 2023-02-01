import { useState } from 'react'
import img from '../images/image-navbar.svg'
import { Menu } from 'react-ionicons'
import { Close } from 'react-ionicons'

export const Navbar = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div className={`2xl:w-[85%] 2xl:mx-auto w-full flex justify-between text-white items-center`}>

      <img src={img} alt="" className="md:h-14 md:w-14" />


      {
        menuIsOpen ?
          <Close
            color={'#ffffff'}
            height="50px"
            width="50px"
            onClick={() => {
              setMenuIsOpen(!menuIsOpen)
            }}
          />
          :
          <div className='flex flex-col gap-2 md:hidden' onClick={() => {
            setMenuIsOpen(!menuIsOpen)
          }}>
            <Menu
              color={'#ffffff'}
              height="50px"
              width="50px"
            />
          </div>
      }



      {
        menuIsOpen ?
          <div className={`
          h-screen w-screen md:hidden bg-secondary-100 absolute top-28 left-0 z-10
          transition-all duration-500 ease-in 
          `}>
            <ul className='text-2xl text-quaternary-100 w-full h-full flex flex-col items-center pt-16 gap-20'>
              <a className='cursor-pointer' href='#section2'>About me</a>
              <a className='cursor-pointer' href='#section3'>Work</a>
              <a className='cursor-pointer' href='#section5'>Contact</a>
            </ul>
          </div>
          :
          null
      }




      <ul className='gap-12 mr-10 font-sf hidden md:flex'>
        <a className='cursor-pointer' href='#section2'>About me</a>
        <a className='cursor-pointer' href='#section3'>Work</a>
        <a className='cursor-pointer' href='#section5'>Contact</a>
      </ul>

    </div>
  )
}
