export default function Legenda() {
    return (
        <div className='legenda'>
            <div className='button-subtitle'>
                <div className='assento selecionado'></div>
                <p>Selecionado</p>
            </div>

            <div className='button-subtitle'>
                <div className='assento'></div>
                <p>Disponível</p>
            </div>

            <div className='button-subtitle'>
                <div className='assento ocupado'></div>
                <p>indisponível</p>
            </div>
        </div>
    )
}