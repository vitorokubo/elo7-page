import Vagas from '@images/foto-bottom.png'
import { useEffect } from 'react'

export default function JobVacancies() {
    async function getJobs() {
        const response = await fetch(
            `http://www.mocky.io/v2/5d6fb6b1310000f89166087b`
        )
        let jobs = await response.json()
        console.log(jobs)
    }
    useEffect(() => {
        getJobs()
    }, [])
    return (
        <section className="JobVacancies">
            <img src={Vagas} />
            <h2>Vagas em Aberto</h2>
            <h2>Não a vagas em aberto no momento</h2>
        </section>
    )
}
