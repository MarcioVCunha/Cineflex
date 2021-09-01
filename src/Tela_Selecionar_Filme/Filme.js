export default function Filme(props) {
    const { poster, index } = props;

    return (
        <div className='caixa-poster'>
            <img className='poster' src={poster.posterURL} alt='' key={index} />
        </div>
    )
}