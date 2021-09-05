import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './seats.css'
import '../CSS/style.css'

import Legenda from './Legenda'
import Buttons from './Buttons'
import Inputs from './Inputs'
import FinalizeRequest from './FinalizeRequest'
import FooterSeats from './FooterSeats'

export default function Seats(props) {
    const params = useParams();
    const id = params.idSessao;
    const { infCompra } = props;
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
            <Buttons seats={seats} infCompra={infCompra} />
            <Legenda />
            <Inputs infCompra={infCompra} />
            <FinalizeRequest infCompra={infCompra} />
            <FooterSeats seats={seats} />
        </main>
    )
}