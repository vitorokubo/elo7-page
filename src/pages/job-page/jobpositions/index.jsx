import Feira from '@images/foto-bottom.png'
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
				`https://www.mocky.io/v2/5d6fb6b1310000f89166087b`
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
			setTimeout(() => setLoading(false), 3000)
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
			<div className="position">
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
				<div className="spinner">
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
		if (error || loading) {
			return null
		}
		return jobs.length ? (
			<div className="positionsList">
				{jobs &&
					jobs.map(({ link, localizacao, cargo }) => (
						<Job
							link={link}
							location={localizacao}
							position={cargo}
							key={Date.now() + Math.random()}
						/>
					))}
			</div>
		) : (
			<div className="NoPositions">Não há vagas disponíveis</div>
		)
	}

	return (
		<section id="vagas" className="jobsSection">
			<img
				src={Feira}
				alt="feira com diversos produtores de produtos artesanais do Elo7"
			/>
			<h2>Vagas em Aberto</h2>
			{renderLoading()}
			{renderError()}
			<JobsList jobs={jobs} />
		</section>
	)
}
