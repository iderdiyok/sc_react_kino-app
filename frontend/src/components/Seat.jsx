import { useState } from "react";

const Seat = (props) => {
    const[reserved, setReserved] = useState(props.place.reserved)

    const updateSeatBooked = () => {
        if(!props.place.booked){
            fetch("http://localhost:9000/seats/reserved", {
                method: "PUT",
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ line: props.seat.line, id: props.place.id})
            }).then(response => response.json())
            .then((updatedSeats) => {
                props.setSeats(updatedSeats)
                setReserved(prev => (!prev))
            })
            .catch(err => {console.log(err);})
        }
    }
    return (
        <div className="col" key={props.place.id}>
            <button 
            onClick={updateSeatBooked} 
            className={`p-3 border-3 seat 
            ${props.seat.price > 10 ? 'bg-secondary' : 'bg-light'} 
            ${reserved ? 'active' : null}
            ${props.place.booked ? 'user' : 'free'}`} 
            >
            </button>
        </div>
    );
}
 
export default Seat;