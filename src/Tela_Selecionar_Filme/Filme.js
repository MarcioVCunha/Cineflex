export default function Filme(props) {
    const { poster, index } = props;

    return (
        <div onClick={() => {
            console.log(poster.id)
        }
        } className='caixa-poster'>
            <img className='poster' id={poster.id} src={poster.posterURL} alt='' key={index} />
        </div>
    )
}