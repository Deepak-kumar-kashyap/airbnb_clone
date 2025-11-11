import React from 'react'
import logo from '../assets/logo.png'
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";


function Nav() {
  return (
    <div>
      <div className='w-[100vw] min-h-[80px] border-b-[1px] border-[#746c6c] px-[20px] flex items-center justify-between'>
        <div><img src={logo} alt="" className='w-[130px]'/></div>
      
      <div className='w-[35%] relative'>
        <input type="text" className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#a59d9d] rounded-[30px] outline-none overflow-auto text-[17px]' placeholder='Any Where |Any Location | Any City'/>
        <button className='absolute p-[10px] rounded-[50%] bg-[red] right-[3%] top-[5px]'><FiSearch  className='w-[20px] h-[20px] text-[white]'/></button>
      </div>

      <div className='flex items-center justify-center gap-[10px]'>
        <span className='text-[18px] cursor-pointer rounded-[50px] hover:bg-[#ded9d9] px-[8px] py-[5px]'>List your home</span>
        <button className='px-[20px] py-[10px] flex items-center justify-center gap-[5px] border-[1px] border-[gray] rounded-[50px] hover:shadow-lg'>
            <span><GiHamburgerMenu className='w-[20px] h-[20px]'/></span>
            <span><CgProfile className='w-[23px] h-[23px]'/></span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Nav
