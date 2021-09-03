import Button from "./Button";

export default function Buttons(props) {
    const { seats, infCompra } = props;

    return (
        <div className='buttons' >
            {seats.seats.map((seat, index) => {
                return (
                    <Button seat={seat} infCompra={infCompra} />
                )
            })}
        </div>
    )
}