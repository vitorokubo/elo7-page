import { useState } from 'react'
import HeroBanner from './pages/job-page/herobanner/HeroBanner'
import TeamSection from './pages/job-page/teamsection/Teamsection'
import './styles/components/App.sass'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <header>
                <HeroBanner />
            </header>
            <main>
                <TeamSection />
            </main>
            <footer></footer>
        </div>
    )
}

export default App
