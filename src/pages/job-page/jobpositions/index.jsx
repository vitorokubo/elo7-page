import Vagas from '@images/foto-bottom.png'
import Spinner from '@images/Triangles-1.3s-200px.svg'
import { useEffect, useState } from 'react'
import '@styles/components/Jobs.sass'

export default function JobPositions() {
    const [error, setError] = useState('')
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)

    const getActiveJobs = jobs => {
        return jobs.filter(job => job.ativa)
    }

    async function fetchJobs() {
        try {
            setLoading(true)
            const response = await fetch(
                `http://www.mocky.io/v2/5d6fb6b1310000f89166087b`
            )
            if (response.status == '200') {
                let jobs = await response.json()
                const activeJobs = getActiveJobs(jobs.vagas)
                return setJobs(activeJobs)
            }
            return setError(true)
        } catch {
            setError('Oops tivemos um problema ;( , tente novamente mais tarde')
        } finally {
            /*Foi setado uma função de timeout para demonstrar o efeito de carregamento(loading)*/
            setTimeout(() => setLoading(false), 900)
        }
    }
    useEffect(() => {
        fetchJobs()
    }, [])

    const Job = ({ link, position, location }) => {
        let locationToRender

        if (location) {
            const { cidade, pais, bairro } = location
            locationToRender = `${cidade}, ${bairro} - ${pais}`
        }

        return (
            <div class="Position">
                <a href={link}>{position}</a>
                <div>
                    <p>{location ? locationToRender : 'Remoto'}</p>
                </div>
            </div>
        )
    }

    const renderLoading = () => {
        if (loading) {
            return (
                <div>
                    <img src={Spinner} alt="carregando" />
                </div>
            )
        }
        return null
    }

    const renderError = () => {
        if (error) {
            return (
                <div>
                    <p>{error}</p>
                </div>
            )
        }
        return null
    }

    const JobsList = ({ jobs }) => {
        console.log(error, loading)
        if (error || loading) {
            return null
        }
        return jobs.length ? (
            <div className="PositionsList">
                {jobs &&
                    jobs.map(({ link, localizacao, cargo }) => (
                        <Job
                            link={link}
                            location={localizacao}
                            position={cargo}
                            key={''}
                        />
                    ))}
            </div>
        ) : (
            <div className="NoPositions">Não há vagas disponíveis</div>
        )
    }

    return (
        <section className="Jobs">
            <img src={Vagas} />
            <h2>Vagas disponíveis</h2>
            {renderLoading()}
            {renderError()}
            <JobsList jobs={jobs} />
        </section>
    )
}
