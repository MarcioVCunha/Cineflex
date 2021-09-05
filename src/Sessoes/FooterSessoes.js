import '../CSS/footer.css'

export default function FooterSessoes(props) {
    const { movie } = props;
    const { title, posterURL } = movie;

    return (
        <footer>
            <div className='container-image'>
                <img src={posterURL} alt='' />
            </div>

            <p className='name-movie'> {title} </p>
        </footer>
    )
}