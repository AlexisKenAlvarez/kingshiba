import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutTemplate = ({ header, desc }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.6 })

    return (
        <motion.div initial={{opacity: 0}} animate={inView ? {scale: [0.5, 1], opacity: 100} : {}} transition={{duration: 0.7}} className="relative w-full h-auto min-h-[22rem]" ref={ref}>
            <div className="w-full h-full bg-white opacity-50 absolute z-0"></div>
            <div className="w-full h-full p-5 px-8 z-10 relative">
                <h1 className=' text-white text-center font-king text-3xl'>{header}</h1>

                <p className='text-center text-white mt-8'>{desc}</p>
            </div>
        </motion.div>
    )
}

export default AboutTemplate