import { useState } from "react";

export default function Button(props) {
    const { seat, infCompra } = props
    const [style, setStyle] = useState(seat.isAvailable ? 'assento' : 'assento ocupado');

    function selecionarAssento() {
        switch (style) {
            case 'assento':
                setStyle('assento selecionado');
                infCompra.objetoPost.id.push(seat.name);
                break;
            case ('assento selecionado'):
                setStyle('assento');
                infCompra.objetoPost.id.splice(infCompra.objetoPost.id.indexOf(seat.name), 1)
                break;
            case ('assento ocupado'):
                alert('Esse assento não está disponível');
                break;
            default:
                break;
        }
        if(infCompra.objetoPost.id.length !== 0){
            infCompra.condicoes.assentos = true;
        } else {
            infCompra.condicoes.assentos = false;
        }
    }

    return (
        <button onClick={selecionarAssento} className={style}>
            {seat.name}
        </button>
    )
}