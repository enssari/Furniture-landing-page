import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import logo from '../images/logo.svg';
import {RxCross2} from 'react-icons/rx';

export const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(true);   

  return (
    <>
    {/* MOBİLE VİEW */}
    <div className={`flex flex-row space-x-[10rem] w-full md:hidden`} id="container-navbar">
        {menuClicked ? (
            <>
            <nav className='m-auto flex flex-row space-x-[10rem] relative left-[-5rem] top-12'>
                <AiOutlineMenu 
                onClick={() => {setMenuClicked(!menuClicked)}}
                size={27} 
                className='text-white hover:cursor-pointer hover:text-[darkgray]'/>

                <img src={logo} className='w-[4.5rem] h-[1rem] object-cover mt-1' alt="logo" />
            </nav>
            </>
        ) : (
            <>
            <nav className='relative m-auto w-full md:hidden'>
                <ul 
                className='flex flex-row bg-white justify-center space-x-12 font-sans
                font-bold py-[4.5rem] text-[1.1rem]'>
                    <RxCross2
                    onClick={() => {setMenuClicked(!menuClicked)}}
                    className='hover:cursor-pointer mt-[-.2rem] text-darkgray hover:text-verydark duration-150'
                    size={30}/>
                    <a href="#" className='hover:border-b-solid hover:border-b-[1.5px] hover:border-b-black
                    hover:text-darkgray duration-150'>home</a>
                    <a href="#" className='hover:border-b-solid hover:border-b-[1.5px] hover:border-b-black
                    hover:text-darkgray duration-150'>shop</a>
                    <a href="#" className='hover:border-b-solid hover:border-b-[1.5px] hover:border-b-black
                    hover:text-darkgray duration-150'>about</a>
                    <a href="#" className='hover:border-b-solid hover:border-b-[1.5px] hover:border-b-black
                    hover:text-darkgray duration-150'>contact</a>
                </ul>
            </nav>
            </>
        )}
    </div>    
    </>
  )
}
