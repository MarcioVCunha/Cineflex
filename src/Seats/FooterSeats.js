import '../CSS/footer.css'

export default function FooterSeats(props) {
    if (props.seats.movie !== undefined) {
        const { infCompra, seats } = props;
        const { name, day, movie } = seats;
        const { weekday, date } = day;
        const { title, posterURL } = movie;

        infCompra.movie.name = title;
        infCompra.movie.date = date;
        infCompra.movie.time = name;

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