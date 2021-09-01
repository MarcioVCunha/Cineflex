import './telaSelecionarFilme.css';
import Filme from './Filme';
import React from 'react';

export default function TelaSelecionarFilme(props) {
    const { posters } = props;

    return (
        <main className='tela-selecionar-filme'>
            <section className='instrucoes'>
                Selecione o filme
            </section>

            <section className='lista-posters'>
                {posters.map((poster, index) => <Filme poster={poster} key={index} />)}
            </section>
        </main>
    )
}