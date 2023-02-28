import React, { useState, useEffect } from 'react'

const Roadmap = () => {


    const phase = [
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                    <p className="">⦿ Lorem Ipsum 5</p>
                    <p className="">⦿ Lorem Ipsum 6</p>
                    <p className="">⦿ Lorem Ipsum 7</p>

                </>
        },
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                </>
        },
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                </>
        },

    ]

    const [current, setCurrent] = useState(0)

    const onEnter = (e) => {
        setCurrent(e)
    }

    const onLeave = () => {
        setCurrent(0)
    }

    return (
        <section className='w-full h-screen py-20 bg-myred text-black'>
            <div className="w-full max-w-[1500px] px-10 mx-auto">
                <div className="uppercase text-header font-king w-full lg:text-8xl md:text-7xl text-5xl flex items-center md:gap-x-10 gap-x-3 mx-auto">
                    <div className="w-full h-[2px] bg-header mt-8"></div>
                    <p className='text-shadow-tshad'>ROADMAP</p>
                    <div className="w-full h-[2px] bg-header mt-8"></div>

                </div>

                <div className='overflow-x-scroll lg:overflow-x-hidden'>
                    <div className="flex max-w-[40rem] mx-auto mt-12 gap-x-4 min-w-[35rem] pb-10">
                        {phase.map((items, index) => {
                            return (
                                <div className={`h-auto bg-white flex flex-col items-center py-10 relative transition-all ease-in-out duration-300 ${current === index ? "shadow-glow2 opacity-100" : "opacity-50"}`} key={index} style={current === index ? { flexGrow: "3" } : {}} onMouseEnter={() => { onEnter(index) }} onMouseLeave={onLeave}>

                                    <div className="absolute left-0 top-0 h-2 w-full  transition-all ease-in-out duration-300" style={current === index ? { backgroundColor: "#FED046" } : { backgroundColor: "white" }}></div>
                                    <div className="font-bold text-2xl font-king">Phase {index + 1}</div>
                                    <div className='mt-4 flex flex-col gap-y-4  transition-all ease-in-out duration-300 origin-top' style={current === index ? { scale: "1" } : { scale: "0" }}>
                                        {items.label}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Roadmap