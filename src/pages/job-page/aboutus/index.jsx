import Smile from '@images/qualidade.png'
import Palette from '@images/atividades.png'
import Metal from '@images/descontracao.png'

import '@styles/components/AboutUs.sass'

const CardList = [
    {
        img: Smile,
        title: 'Qualidade de Vida',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum.'
    },
    {
        img: Palette,
        title: 'Ambiente Descontraído',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce risus tellus, tempus quis lacinia in, vehicula ut turpis.'
    },
    {
        img: Metal,
        title: 'Atividades Extras',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce risus tellus.'
    }
]

function Card({ title, description, img }) {
    return (
        <article className="card">
            <div className="cardImageTitle">
                <img src={img} />
                <h3>{title}</h3>
            </div>
            <div className="cardText">
                <p>{description}</p>
            </div>
        </article>
    )
}

export default function AboutUs() {
    return (
        <section id="sobre" className="aboutUs">
            <div className="cardsSection">
                {CardList.map(card => {
                    return <Card {...card} />
                })}
            </div>
            <div className="link">
                <hr />
                <a href="#">Saiba mais »</a>
            </div>
        </section>
    )
}
