import '../../../styles/components/TeamSection.sass'
import placeholder_video from '../../../images/placeholder-video.png'
import beatriz from '../../../images/beatriz.png'
import camila from '../../../images/camila.png'
import david from '../../../images/david.png'
import guto from '../../../images/guto.png'

export default function TeamSection() {
    return (
        <section className="TeamSection">
            <div className="CeoContent">
                <div className="Video">
                    <img
                        className="placeholder_video"
                        src={placeholder_video}
                    />
                </div>
                <div className="Quote">
                    <div className="CeoName">
                        <h2>Palavra do Ceo</h2>
                        <p className="Name">Carlos Curioni</p>
                    </div>
                    <div className="CeoPhrase">
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
            <div className="TeamMembers">
                <h2>CONHEÇA NOSSO TIME FORA DE SÉRIE</h2>
                <div className="TeamPhoto">
                    <img src={beatriz} />
                    <img src={camila} />
                    <img src={david} />
                    <img src={guto} />
                </div>
            </div>
        </section>
    )
}
