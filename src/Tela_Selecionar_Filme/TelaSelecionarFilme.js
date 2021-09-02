import { useState, useEffect } from 'react';
import axios from 'axios';

import './telaSelecionarFilme.css';
import Filme from './Filme';

export default function TelaSelecionarFilme() {
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies');

        promisse.then((answear) => {
            setPosters(answear.data);
        });
    }, [])

    return (
        <main className='tela-selecionar-filme'>
            <p className='instrucoes'>
                Selecione o filme.
            </p>

            <section className='lista-posters'>
                {posters.map((poster, index) => {
                    return (
                        <Filme poster={poster} key={index} />
                    )
                })}
            </section>
        </main>
    )
}