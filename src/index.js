import reactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './CSS/reset.css';
import './CSS/style.css';
import Header from './Header/Header';
import TelaSelecionarFilme from './Tela_Selecionar_Filme/TelaSelecionarFilme';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path='/' exact>
                    <TelaSelecionarFilme />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

reactDom.render(<App />, document.querySelector('.root'));