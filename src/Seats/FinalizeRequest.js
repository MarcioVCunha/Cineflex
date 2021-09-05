import { Link } from "react-router-dom";

export default function FinalizeRequest(props) {
    const { infCompra } = props;
    const condicoes = infCompra.condicoes;

    function emitirAlerta(event) {
        if (!condicoes.assentos) {
            alert('Por favor, selecione os assentos');
            event.preventDefault();
        }
        if (!condicoes.nome) {
            alert('Por favor, informe seu nome');
            event.preventDefault();
        }
        if (!condicoes.cpf) {
            alert('Por favor, informe o cpf com pontos e traço (111.111.111-11)')
            event.preventDefault();
        }
    }

    return (
        <Link to={'/sucesso'}>
            <button onClick={(event) => emitirAlerta(event)} className='finalizar'>
                Reservar assento(s)
            </button>
        </Link>
    )
}