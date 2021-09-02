import { Link } from "react-router-dom";

export default function Filme(props) {
    const { poster } = props;

    return (
        <Link key={poster.id} to={`/Filme/${poster.id}`} >

            <div className='caixa-poster'>
                <img className='poster' src={poster.posterURL} alt='' />
            </div>
        </Link>
    )
}