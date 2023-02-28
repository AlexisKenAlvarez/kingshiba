import React from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Utilities from './components/Utilities'

const App = () => {
    return (
        <>
            <Hero />
            <About />
            <Utilities />
            <Tokenomics />
            <Roadmap />
        </>
    )
}

export default App