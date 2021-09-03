import reactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';

import './CSS/reset.css';
import './CSS/style.css';

import Header from './Header/Header';
import TelaSelecionarFilme from './Tela_Selecionar_Filme/TelaSelecionarFilme';
import Sessoes from './Sessoes/Sessoes';
import Seats from './Seats/Seats';

function App() {
    const infCompra = {
        objetoPost: {
            id: [],
            nome: '',
            cpf: '',
        },
        condicoes: {
            assentos: false,
            nome: false,
            cpf: false
        }
    };

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path='/' exact >
                    <TelaSelecionarFilme />
                </Route>

                <Route path='/filme/:idFilme' exact>
                    <Sessoes />
                </Route>

                <Route path='/sessao/:idSessao' exact>
                    <Seats infCompra={infCompra} />
                </Route>

                <Route path='/sucesso' exact>
                    
                </Route>
            </Switch>
        </BrowserRouter >
    )
}

reactDom.render(<App />, document.querySelector('.root'));