import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Sessoes.css";
import "../CSS/style.css"

export default function Sessoes() {
    const params = useParams();
    const id = params.idFilme;

    const [sessoes, setSessao] = useState({ days: [] });

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`)

        promisse.then((resposta) => {
            setSessao(resposta.data)
        })
    }, [id])

    return (
        <main className='tela-sessoes'>
            <p className='instrucoes'>
                Selecione o horário.
            </p>

            {sessoes.days.map((sessao) => {
                return (
                    <>
                        <p className='dia-sessão'>
                            {`${sessao.weekday} - ${sessao.date}`}
                        </p>

                        {sessao.showtimes.map((horario, index) => {
                            return (
                                <Link key={index} to={`/sessao/${horario.id}`}>
                                    <button className='horario-sessao'>{horario.name}</button>
                                </Link>
                            )
                        })}
                    </>
                )
            })}
        </main>
    )
}