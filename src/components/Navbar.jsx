import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants/constants'
import { close, logo, menu } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false )
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className=' w-full flex justify-between items-center max-w-7xl'>
      <Link 
      to="/" 
      className=' flex items-center gap-2'
      onClick={() => {setActive(""); window.scrollTo(0,0)}}
      >
      <img src={logo} alt='logo' className=' h-20 object-contain'></img>
      <p className=' text-white text-[20px] font-bold cursor-pointer flex'>Armando&nbsp;<span className=' sm:block hidden'>Mac Beath</span> </p>
       </Link>
       <ul className=' list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map(link => (
          <li
           key={link.id}
           onClick={() => setActive(link.title)}
           className={`${active === link.title ? "text-white" : " text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
       </ul>
       <div className=' sm:hidden flex flex-1 justify-end items-center'>
        <img className=' hover:cursor-pointer h-5'
        src={toggle ? close : menu}
        alt='menu'
        onClick={() => setToggle(!toggle)}
        >
        </img>
          <div className={`${!toggle ? "hidden" : "flex" } p-6 bg-gradient-to-r from-indigo-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className=' list-none justify-end items-start flex flex-col gap-4'>
        {navLinks.map(link => (
          <li
           key={link.id}
           onClick={() => {setActive(link.title); setToggle(!toggle)}}
           className={`${active === link.title ? "text-white" : " text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
       </ul>
          </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar