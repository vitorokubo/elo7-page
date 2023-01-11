import { useState } from 'react'
import './App.sass'
import HeroBanner from './pages/job-page/herobanner/HeroBanner'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <HeroBanner></HeroBanner>
        </div>
    )
}

export default App
