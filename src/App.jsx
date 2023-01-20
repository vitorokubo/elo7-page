import '@styles/components/App.sass'
import HeroBanner from '@pages/herobanner'
import TeamSection from '@pages/teamsection'
import AboutUs from '@pages/aboutus'
import Jobs from '@pages/jobpositions'
import Footer from '@pages/footer'

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
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default App
