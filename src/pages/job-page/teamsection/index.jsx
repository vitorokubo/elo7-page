import '@styles/components/TeamSection.sass'
import placeholder_video from '@images/placeholder-video.png'
import beatriz from '@images/beatriz.png'
import camila from '@images/camila.png'
import david from '@images/david.png'
import guto from '@images/guto.png'

export default function TeamSection() {
	return (
		<section id="team" className="teamSection">
			<div className="ceoContent">
				<img
					className="placeholderVideo"
					src={placeholder_video}
					alt="Video do Ceo Carlos Curioni"
				/>

				<div className="quote">
					<div className="ceoName">
						<h2>Palavra do Ceo</h2>
						<p className="name">Carlos Curioni</p>
					</div>
					<div className="ceoPhrase">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquam modi vel deserunt commodi a quis
							soluta, voluptatum odio architecto laboriosam
							voluptas enim itaque ad praesentium dolorum
							accusantium molestiae! Eos, voluptatem!
						</p>
					</div>
				</div>
			</div>
			<h2 className="h2Team">
				Conheça Nosso Time
				<br />
				Fora De Série
			</h2>
			<div className="teamPicture">
				<img src={camila} alt="foto da colaboradora Camila" />
				<img src={guto} alt="foto do colaborador Guto" />
				<img src={david} alt="foto do colaborador David" />
				<img src={beatriz} alt="foto da caloaboradora Beatriz" />
			</div>
		</section>
	)
}
