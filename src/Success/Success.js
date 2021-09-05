import { Link } from 'react-router-dom';
import axios from 'axios';

import './success.css'

export default function Success(props) {
    let { objetoPost, movie } = props.infCompra;

    function finalizarPedido() {
        props.infCompra.objetoPost.cpf.replace('.', '');
        props.infCompra.objetoPost.cpf.replace('-', '');

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', props.infCompra.objetoPost);

        console.log(props.infCompra.objetoPost);

        props.infCompra.objetoPost = {
            ids: [],
            name: '',
            cpf: ''
        }

        props.infCompra.condicoes = {
            assentos: false,
            name: false,
            cpf: false
        }


        props.infCompra.movie = {
            name: '',
            date: '',
            time: ''
        }
    };

    return (
        <main className='page-success'>
            <p className='instructions' >Pedido feito com sucesso!</p>

            <section className='inf-movie'>
                <p className='title'>Filme e sessão</p>
                <p className='informations'> {movie.name} </p>
                <p className='informations'> {`${movie.date} ${movie.time}`}</p>
            </section>

            <section className='inf-movie'>
                <p className='title'>Ingressos</p>
                {objetoPost.ids.map((seat) => {
                    return (
                        <p className='informations'> {`Assento: ${seat}`}</p>
                    )
                })}
            </section>

            <section className='inf-movie'>
                <p className='title'>Comprador</p>
                <p className='informations'> {`Nome: ${objetoPost.name}`} </p>
                <p className='informations'> {`CPF: ${objetoPost.cpf}`}</p>
            </section>

            <Link to='/'>
                <button onClick={finalizarPedido} className='return-home'>Voltar pra Home</button>
            </Link>
        </main>
    )
}