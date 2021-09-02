import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './seats.css'
import '../CSS/style.css'

export default function Seats() {
    const params = useParams();
    const id = params.idSessao;

    const [seats, setSeats] = useState({ seats: [] });

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)

        promisse.then((resposta) => {
            setSeats(resposta.data);
        })
    }, [id])

    return (
        <main className='tela-assentos' >
            <p className='instrucoes'>Selecione o(s) assento(s)</p>

            <div className='buttons' >
                {seats.seats.map((seat, index) => {
                    const style = seat.isAvailable ? 'assento' : 'ocupado assento';

                    return (
                        <button className={style}>
                            {seat.name}
                        </button>
                    )
                })}
            </div>

            <div className='legenda'>
                <div className='button-legend'>
                    <div className='assento selecionado'></div>
                    <p>Selecionado</p>
                </div>

                <div className='button-legend'>
                    <div className='assento'></div>
                    <p>Disponível</p>
                </div>

                <div className='button-legend'>
                    <div className='assento ocupado'></div>
                    <p>indisponível</p>
                </div>
            </div>

            <p className='texto-input'>
                Nome do comprador:
            </p>
            <input placeholder='Digite seu nome...'></input>

            <p className='texto-input'>
                CPF do comprador:
            </p>
            <input placeholder='Digite seu CPF...'></input>

            <button className='finalizar'>
                Reservar assento(s)
            </button>
        </main>
    )
}