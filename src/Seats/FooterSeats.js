import '../CSS/footer.css'

export default function FooterSeats(props) {
    if (props.seats.movie !== undefined) {
        const { name, day, movie } = props.seats;
        const { weekday } = day;
        const { title, posterURL } = movie;

        return (
            <footer>
                <div className='container-image'>
                    <img src={posterURL} alt='' />
                </div>
                <div className='container-info-movie'>
                    <p className='name-movie'> {title} </p>
                    <p className='name-movie'> {`${weekday} - ${name}`} </p>
                </div>
            </footer>
        )
    } else {
        return (<p>Carregando</p>)
    }
}