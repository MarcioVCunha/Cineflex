import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Sessoes.css";
import "../CSS/style.css"

export default function Sessoes() {
    const params = useParams();
    const id = params.idFilme;

    const [sessoes, setSessao] = useState({});

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`)

        promisse.then((resposta) => {
            setSessao(resposta.data)
        })
    }, [])

    return (
        <main className='tela-sessoes'>
            <p className='instrucoes'>
                Selecione o horário.
            </p>
        </main>
    )
}