import React, { useState } from 'react'
import { images } from './SliderImages'
import right from '../images/icon-angle-right.svg';
import left from '../images/icon-angle-left.svg';
import dark from '../images/image-about-dark.jpg';
import light from '../images/image-about-light.jpg';
import logo from '../images/logo.svg';


export const Hero = () => {

  const [index, setIndex] = useState(0)

  const toggleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
  const togglePrev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(images.length - 1)
    }
  }

  return (
    <>
    
    {/* MOBİLE VİEW */}
    <div className="mt-[-1.7rem] md:hidden" id="container">
        <div className="" id="image-section">
            <div className="" id="top-table">
                <img src={images[index]} className='w-full z-[-1]' alt="slider"/>

                <div className="flex justify-end" id="arrows">
                    <button 
                    onClick={togglePrev}
                    
                    className='bg-black text-white text-[3rem] w-[4rem] mt-[-4rem]
                    hover:bg-verydark pt-2 pl-6 duration-100'><img src={left} alt="left"/></button>

                    <button 
                    onClick={toggleNext}
                    className='bg-black text-white text-[3rem] w-[4rem] mt-[-4rem]
                    hover:bg-verydark pt-2 pl-6 duration-100'><img src={right} alt="right"/></button>
                </div>
                
                <div className='m-auto w-[23rem]' id="show-now-section">
                  <div className="pt-10" id="text-wrapper">
                    <h1 className='font-bold text-[2rem] font-sans'>Discover innovative ways to decorate</h1>

                    <p className='text-darkgray text-[1.2rem] font-bold'>
                      We provide unmatched quality, comfort, and style for property owners across the country.
                      Our experts combine form and function in bringing your vision to life. Create a room in 
                      your own style with our collection and make your property a reflection of you and what
                      you love.
                    </p>

                    <div className="pt-5 hover:" id="shop-now-btn">
                      <button className='flex flex-row text-[1.2rem] font-bold tracking-widest font-sans hover:text-gray-400 duration-150'>
                        SHOP NOW <span className='text-[2.5rem] mt-[-1rem] ml-[1rem]'>→</span>
                      </button>
                    </div>

                  </div>
                </div>
            </div>

            <div className="pt-10 md:hidden" id="bot-table">
              <img src={dark} className='w-full pt-10' alt="dark"/>
              
              <div className="w-[23rem] m-auto" id="about-furniture">
                <div className="pt-12" id="text-wrapper-2">
                  <h2 className='tracking-widest font-bold font-sans text-[1.2rem]'>ABOUT OUR FURNITURE</h2>

                  <p className='text-darkgray text-[1.1rem] pt-6 font-bold'>
                  Our multifunctional collection blends design and function to suit your 
                  individual taste. Make each room unique, or pick a cohesive theme that best express your interests and
                  what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything
                  in between. Product specialists are available to help you create your dream space.</p>
                </div>
              </div>

              <img src={light} alt="light" className='w-full pt-10'/>
            </div>
        </div>
    </div>

    {/* DESKTOP VİEW */}
    <div className="hidden md:block m-auto w-[50rem] lg:w-[65rem] xl:w-[84rem] 2xl:w-auto" id="top-container">
        <nav className='m-auto'>
          <img src={images[index]} className='h-[23rem] lg:h-[33rem] xl:w-[50rem] 2xl:w-[62rem] 2xl:h-[37rem]' alt="img1"/>
            <ul className='space-x-4 lg:space-x-10 2xl:space-x-[3rem] text-white font-medium font-sans flex
            flex-row p-10 mt-[-22.5rem] lg:mt-[-33rem] 2xl:mt-[-36rem] ml-[-1.5rem] 2xl:ml-[1.2rem] h-[6.7rem]
            lg:text-[1.1rem] xl:text-[1.2rem]'>
                <img src={logo} className='w-[5rem] lg:w-[5rem] xl:w-[7rem] h-[1.2rem] lg:h-[1.5rem] xl:h-[1.8rem] mr-5
                2xl:w-[8rem]' alt="logo-m" />
                <a href="#" className='hover:border-b-solid hover:border-b-[1.5px] hover:border-b-white
                pb-2 duration-100 lg:hover:border-b-[2px] 2xl:hover:border-b-[3px] ease-linear'>home</a>
                <a href="#" className='hover:border-b-solid hover:border-b-[1.5px] hover:border-b-white
                pb-2 duration-100 lg:hover:border-b-[2px] 2xl:hover:border-b-[3px] ease-linear'>shop</a>
                <a href="#" className='hover:border-b-solid hover:border-b-[1.5px] hover:border-b-white
                pb-2 duration-100 lg:hover:border-b-[2px] 2xl:hover:border-b-[3px] ease-linear'>about</a>
                <a href="#" className='hover:border-b-solid hover:border-b-[1.5px] hover:border-b-white
                pb-2 duration-100 lg:hover:border-b-[2px] 2xl:hover:border-b-[3px] ease-linear'>contact</a>
            </ul>
        </nav>
        
        <div className="w-[23rem] mt-[-6.7rem] lg:mt-[.8rem] 2xl:mt-[3.8rem] ml-[25rem] lg:ml-[36rem] xl:ml-[51.7rem] 2xl:ml-[63.7rem]
        " id="discover-section">
          <div className="flex justify-start relative top-[22.5rem] lg:top-[25.5rem] lg:left-[-1.7rem] sm:left-[-1.05rem]" id="arrows">
            <button 
            onClick={togglePrev}
            className='bg-black text-white text-[3rem] w-[4rem] lg:w-[5rem] mt-[-4rem]
            hover:bg-verydark pt-2 pl-6 lg:pl-8 duration-100'><img src={left} alt="left"/></button>

            <button 
            onClick={toggleNext}
            className='bg-black text-white text-[3rem] w-[4rem] lg:w-[5rem] mt-[-4rem]
            hover:bg-verydark pt-2 pl-6 lg:pl-8 duration-100'><img src={right} alt="right"/></button>
            </div>

          <div 
          className="p-4 lg:p-7 ml-5 lg:ml-2 lg:ml-18 2xl:ml-[4rem] mt-[-2rem] space-y-[-.8rem] lg:mt-[-5.5rem] lg:space-y-1
          lg:w-[26rem] xl:w-[30rem] 2xl:w-[33rem]" id="discover-text">
            <h1 className='font-bold text-[2rem] 2xl:text-[2.5rem] font-sans'>
              Discover innovative ways to decorate
            </h1>
            
            <p className='text-darkgray text-[1.2rem] font-bold'>
                We provide unmatched quality, comfort, and style for property owners across the country.
                Our experts combine form and function in bringing your vision to life. Create a room in 
                your own style with our collection and make your property a reflection of you and what
                you love.
            </p>

            <div className="pt-5" id="shop-now-btn">
                <button className='flex flex-row text-[1.2rem] font-bold tracking-widest font-sans hover:text-gray-400 duration-150'>
                SHOP NOW <span className='text-[2.5rem] mt-[-1rem] ml-[1rem]'>→</span>
                </button>
            </div>
          </div>
        </div>
    </div>

    <div className="justify-center mt-[8rem] lg:mt-[13rem] hidden md:flex lg:h-[16rem] xl:h-[20rem] 2xl:mt-[8.13rem]" id="bot-container">
      <div className="flex flex-row w-[27rem] sm:w-[24rem] lg:w-[33rem] xl:w-[51.6rem] 2xl:w-auto ml-[-32rem] sm:ml-[-36rem] 
      lg:ml-[-31.6rem] xl:ml-[-32.2rem] 2xl:ml-0 p-[5rem] lg:p-0" id="section-wrapper">
        <img src={dark} className='lg:w-[19rem] xl:w-[28rem] 2xl:w-[33rem] 2xl:h-[22.6rem] sm:h-[18rem]' alt="dark" />

        <div className="p-5 ml-3 2xl:mt-[4rem]" id="about-text">
          <h2 className='tracking-widest font-bold font-sans text-[1.2rem]'>ABOUT OUR FURNITURE</h2>
          
          <p className='text-darkgray text-[1.1rem] pt-6 font-bold w-[12rem] sm:w-[19rem] lg:w-[24rem] 2xl:w-[35.5rem]'>
            Our multifunctional collection blends design and function to suit your 
            individual taste. Make each room unique, or pick a cohesive theme that best express your interests and
            what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything
            in between. Product specialists are available to help you create your dream space.
          </p>
        </div>

        <img src={light}  className='lg:w-[19rem] xl:w-[28rem] 2xl:w-[33rem] 2xl:h-[22.6rem] sm:h-[18rem]' alt="light" />
      </div>
    </div>
    </>
  )
}
