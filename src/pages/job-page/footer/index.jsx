import elo7logo from '@images/logo-elo7.svg'
import '@styles/components/Footer.sass'

export default function Footer() {
	return (
		<div className="footer">
			<div className="wrapper">
				<div className="about">
					<h3>Sobre o Elo7</h3>
					<ul>
						<li>
							<a href="#">Quem somos</a>
						</li>
						<li>
							<a
								href="https://elo7.gupy.io/"
								title="Carreira"
								target="_blank"
							>
								Carreira
							</a>
						</li>
					</ul>
					<img src={elo7logo} />
				</div>
				<div className="redes">
					<h3>Se Conecte com a Gente</h3>
					<ul>
						<li className="facebook">
							<a
								href="https://www.facebook.com/Elo7br"
								title="Facebook"
								target="_blank"
							>
								Facebook
							</a>
						</li>
						<li className="instagram">
							<a
								href="https://instagram.com/elo7br"
								title="Instagram"
								target="_blank"
							>
								Instagram
							</a>
						</li>
						<li className="pinterest">
							<a
								href="https://pinterest.com/elo7br/"
								title="Pinterest"
							>
								Pinterest
							</a>
						</li>
						<li className="twitter">
							<a
								href="https://twitter.com/elo7"
								title="Twitter"
								target="_blank"
							>
								Twitter
							</a>
						</li>
						<li className="linkedin">
							<a
								href="https://br.linkedin.com/company/elo7"
								title="Linkedin"
								target="_blank"
							>
								Linkedin
							</a>
						</li>
						<li className="youtube">
							<a
								href="https://www.youtube.com/channel/UCUD0gYgorev11RVF0gb_44A"
								title="YouTube"
								target="_blank"
							>
								YouTube
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
