import Smile from '@images/qualidade.png'
import Palette from '@images/atividades.png'
import Metal from '@images/descontracao.png'

import '@styles/components/AboutUs.sass'

const CardList = [
    {
        img: Smile,
        title: 'Qualidade de Vida',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam placeat ducimus ad nisi illum, repellendus dolor nemo? Quos eveniet nobis libero molestiae! Enim optio reiciendis corrupti reprehenderit illum distinctio!'
    },
    {
        img: Palette,
        title: 'Ambiente Descontraído',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam placeat ducimus ad nisi illum, repellendus dolor nemo? Quos eveniet nobis libero molestiae! Enim optio reiciendis corrupti reprehenderit illum distinctio!'
    },
    {
        img: Metal,
        title: 'Atividades Extras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam placeat ducimus ad nisi illum, repellendus dolor nemo? Quos eveniet nobis libero molestiae! Enim optio reiciendis corrupti reprehenderit illum distinctio!'
    }
]

function Card({ title, description, img }) {
    return (
        <article className="card">
            
                <img src={img} />
                <h3>{title}</h3>
            
            <div className="cardText">
                <p>{description}</p>
            </div>
        </article>
    )
}

export default function AboutUs() {
    return (
        <section className="aboutUs">
            <div className="cardsSection">
                {CardList.map(card => {
                    return <Card {...card} />
                })}
            </div>
            <div className="link">
                <hr />
                <a>Saiba mais</a>
            </div>
        </section>
    )
}
