import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { useEffect } from 'react/cjs/react.production.min';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import './telaSelecionarFilme.css';
import Filme from './Filme';

export default function TelaSelecionarFilme() {
    const [posters, setPosters] = React.useState([]);

    const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies');
    promisse.then((answear) => {
        setPosters(answear.data);
    });

    return (
        <main className='tela-selecionar-filme'>
            <section className='instrucoes'>
                Selecione o filme
            </section>

            <section className='lista-posters'>
                {posters.map((poster, index) => {
                    <Link key={index} to={`/Filme/${poster.id}`} >
                        <Filme poster={poster} />
                    </Link>
                })}
            </section>
        </main>
    )
}