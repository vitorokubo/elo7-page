import { useState } from 'react'
import HeroBanner from '@pages/herobanner'
import TeamSection from '@pages/teamsection'
import './styles/components/App.sass'
import AboutUs from '@pages/aboutus'

function App() {
    return (
        <div className="App">
            <header>
                <HeroBanner />
            </header>
            <main>
                <TeamSection />
                <AboutUs />
            </main>
            <footer></footer>
        </div>
    )
}

export default App
