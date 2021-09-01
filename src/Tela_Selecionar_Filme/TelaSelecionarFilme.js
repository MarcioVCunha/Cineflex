import './telaSelecionarFilme.css'
import Poster from '../Assets/Poster.jpeg'
import Filme from './Filme'

const teste = [Poster, Poster, Poster, Poster, Poster, Poster]

export default function TelaSelecionarFilme() {
    return (
        <main className='tela-selecionar-filme'>
            <section className='instrucoes'>
                Selecione o filme
            </section>

            <section className='lista-posters'>
                {teste.map((poster, index) => <Filme poster={poster} key={index} />)}
            </section>
        </main>
    )
}