import React from 'react'

const About = () => {
    return (
        <section className='bg-myred h-auto w-full overflow-hidden py-20 pb-[10rem] relative'>
            <img src="/aboutline.webp" alt="lines" className="absolute bottom-0 right-0" />
            <div className="max-w-[1500px] w-full mx-auto mt-36 px-8">
                <div className="border-2 border-white p-4 mx-auto relative w-full max-w-[60rem]">
                    <div className="font-king text-center absolute md:w-[80%] w-[70%] mx-auto left-0 right-0 md:mt-[-6.5rem] mt-[-4rem] bg-myred">
                        <h2 className='uppercase text-white md:text-xl text-lg sm:-mb-3'>About Kingshiba</h2>
                        <div className="uppercase text-header lg:text-8xl md:text-7xl text-5xl flex items-center md:gap-x-10 gap-x-3 mx-auto w-fit">
                            <img src="/crowngif.gif" alt="crown" className="md:h-20 h-10 m:mt-8 mt-4 sm:block hidden" />
                            <p className=''>KINGSHIBA</p>
                            <img src="/crowngif.gif" alt="crown" className="md:h-20 h-10 md:mt-8 mt-4 sm:block hidden" />
                        </div>
                    </div>

                    <div className="flex gap-x-4 mt-20 w-full md:flex-row flex-col gap-y-4">
                        <div className="relative w-full h-auto min-h-[22rem]">
                            <div className="w-full h-full bg-white opacity-50 absolute z-0"></div>
                            <div className="w-full h-full p-5 px-8 z-10 relative">
                                <h1 className=' text-white text-center font-king text-3xl'>LOREM IPUSM</h1>

                                <p className='text-center text-white mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>

                        <div className="relative w-full h-auto min-h-[22rem]">
                            <div className="w-full h-full bg-white opacity-50 absolute z-0"></div>
                            <div className="w-full h-full p-5 px-8 z-10 relative">
                                <h1 className=' text-white text-center font-king text-3xl'>LOREM IPUSM</h1>

                                <p className='text-center text-white mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About