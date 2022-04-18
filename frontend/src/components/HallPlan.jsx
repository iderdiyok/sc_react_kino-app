import { useEffect } from "react";
import Checkout from "./Checkout";
import Seat from "./Seat";
import SeatLegend from "./SeatLegend";

const HallPlan = (props) => {


    useEffect(() => {
        fetch("http://localhost:9000/seats")
        .then(response => response.json())
        .then(seatsArr => {
            props.setSeats(seatsArr)
        })
        .catch((err) => {
            console.log(err);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="row g-5 mb-5">
        <div className="col-md-7 col-lg-8">
                <h5 className="text-center">Kino 1</h5>
            <div className="row col-11 ms-5 mx-auto bg-secondary bg-gradient mb-5">
                <h2 className="fw-bold text-center text-light">LEINWAND</h2>
            </div>
            {
                props.seats.map((seat, i) => 
                    <div key={i} className={`row row-cols-12 ${seat.price > 10 ? 'mt-4' : 'mb-2'}`}>
                        <h3 className="col fw-bold">{seat.line}</h3>
                        {
                            seat.places.map( (place, j) => 
                                <Seat seat={seat} place={place} setSeats={props.setSeats} key={j}/>
                            )
                        }
                        
                    </div>
                )
            }
            <SeatLegend />
            </div>
            <Checkout seat={props.seat} setSeats={props.setSeats}/>
        </div>
    );
}
export default HallPlan;