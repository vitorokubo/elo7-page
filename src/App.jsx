import '@styles/components/App.sass'
import { lazy } from 'react'

import HeroBanner from '@pages/herobanner'
const TeamSection = lazy(() => import('@pages/teamsection'))
const AboutUs = lazy(() => import('@pages/aboutus'))
const Jobs = lazy(() => import('@pages/jobpositions'))
const Footer = lazy(() => import('@pages/footer'))

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
				<Footer />
			</footer>
		</div>
	)
}

export default App
