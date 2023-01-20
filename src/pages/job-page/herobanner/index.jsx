import '@styles/components/HeroBanner.sass'

export default function HeroBanner() {
    return (
        <div className='heroBanner'>
            <div
                className="banner"
                alt="Banner com foto dos colaboradores da Elo7 reunidos e em comemoração"
            >
                <div className="title">
                    <h1>Trabalhe no Elo7</h1>
                </div>
            </div>
            <div className="chamadaVagas">
                <p>
                    O Elo7 é o maior site de produtos autorais do Brasil.
                    Formamos a maior comunidade de vendedores criativos e
                    buscamos fomentar o comércio de produtos autorais.
                <br/>
                    Muito mais que um site, o Elo7 nasceu em 2008 com a missão
                    de transformar a vida das pessoas através de um ambiente
                    humanizado de compra e venda que conecta e inspira,
                    conferindo significado a cada transação realizada.
                </p>
            </div>
            <div className="link">
                    <hr />
                    <a href="#Vagas">Vagas em Aberto</a>
                </div>
        </div>
    )
}
