import reactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';
import React from 'react'

import './CSS/reset.css';
import './CSS/style.css';
import Header from './Header/Header';
import TelaSelecionarFilme from './Tela_Selecionar_Filme/TelaSelecionarFilme';

const URL_POSTER = 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies';

function App() {
    const [posters, setPosters] = React.useState(['', '']);

    const promisse = axios.get(URL_POSTER);
    promisse.then((answear) => {
        setPosters(answear.data);
    })

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path='/' exact>
                    <TelaSelecionarFilme posters={posters}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

reactDom.render(<App />, document.querySelector('.root'));