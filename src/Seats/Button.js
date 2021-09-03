import { useState } from "react";

export default function Button(props) {
    const { seat, infCompra } = props
    const [style, setStyle] = useState(seat.isAvailable ? 'assento' : 'assento ocupado');

    function selecionarAssento() {
        switch (style) {
            case 'assento':
                setStyle('assento selecionado');
                infCompra.assentos.push(seat.name);
                break;
            case ('assento selecionado'):
                setStyle('assento');
                infCompra.assentos.splice(infCompra.assentos.indexOf(seat.name), 1)
                break;
            case ('assento ocupado'):
                alert('Esse assento não está disponível');
                break;
            default:
                break;
        }
    }

    return (
        <button onClick={selecionarAssento} className={style}>
            {seat.name}
        </button>
    )
}