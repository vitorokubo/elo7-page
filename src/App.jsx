import HeroBanner from '@pages/herobanner'
import TeamSection from '@pages/teamsection'
import './styles/components/App.sass'
import AboutUs from '@pages/aboutus'
import Jobs from '@pages/jobvacancies'

function App() {
    return (
        <div className="App">
            <header>
                <HeroBanner />
            </header>
            <main>
                <TeamSection />
                <AboutUs />
                <Jobs />
            </main>
            <footer></footer>
        </div>
    )
}

export default App
