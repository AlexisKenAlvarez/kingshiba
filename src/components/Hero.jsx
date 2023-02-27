import React from 'react'
import Nav from './Nav'
import { GiBroadsword } from 'react-icons/gi'

const Hero = () => {
    return (
        <section className='w-full h-screen bg-gradient-to-b from-black to-myred flex items-center justify-center relative'>
            <img src="/heroline.webp" alt="Line" className="absolute bottom-0 left-0 z-0" />

            <Nav />
            <div className='max-w-[1500px] w-full h-auto md:px-12 px-10 flex items-center justify-between relative z-10'>

                <div className="w-full h-full relative z-[11]">
                    <div className="flex xl:gap-x-10 gap-x-7">
                        <h1 className='text-header xl:text-8xl md:text-7xl text-5xl font-king'>KING SHIBA</h1>
                        <GiBroadsword className='xl:text-9xl md:text-8xl text-6xl text-header rotate-45' />
                    </div>

                    <p className='font-poppins text-white max-w-[35rem] mt-0 text-sm md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                    <div className="mt-10 flex gap-x-4 sm:items-center sm:flex-row flex-col gap-y-4 items-start">
                        <button className='font-king text-myred bg-white px-10 py-4 rounded-xl shadow-glow hover:shadow-glow2 transition-all ease-in-out duration-300'>
                            <p className='mt-[-5px] text-lg'>BUY TOKEN</p>
                        </button>

                        <button className='font-king text-white border-white border-2 px-10 py-4 rounded-xl hover:bg-white hover:text-myred hover:shadow-glow2 transition-all ease-in-out duration-300'>
                            <p className='mt-[-5px] text-lg'>CHART</p>
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-full lg:relative absolute bottom-0 right-0 z-10 opacity-20 lg:opacity-100">
                    <img src="/hero.webp" alt="King Shiba Image" className="w-[80vh] mt-20" />
                </div>
            </div>

        </section>
    )
}

export default Hero