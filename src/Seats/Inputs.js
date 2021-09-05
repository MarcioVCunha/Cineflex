export default function Inputs(props) {
    const { infCompra } = props;

    function isTrueCPF(event) {
        const rule = /(\d{3}).(\d{3}).(\d{3})-(\d{2})/

        return (rule.test(event.target.value))
    }

    function salvarString(tipo, event) {
        if (tipo === 'cpf' && isTrueCPF(event)) {
            infCompra.objetoPost.cpf = event.target.value;
            infCompra.condicoes.cpf = true;
        }

        if (tipo === 'nome') {
            infCompra.objetoPost.name = event.target.value;
            if (event.target.value === '') {
                infCompra.condicoes.name = false;
            } else {
                infCompra.condicoes.name = true;
            }
        }
    }

    return (
        <>
            <p className='texto-input'>
                Nome do comprador:
            </p>
            <input onChange={
                (event) => salvarString('nome', event)
            } placeholder='Digite seu nome...'></input>

            <p className='texto-input'>
                CPF do comprador:
            </p>
            <input onChange={
                (event) => salvarString('cpf', event)
            } placeholder='Digite seu CPF...'></input>
        </>
    )
}