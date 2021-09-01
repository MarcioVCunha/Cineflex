export default function Filme(props) {
    return (
        <div className='caixa-poster'>
            <img className='poster' src={props.poster} alt='' />
        </div>
    )
}