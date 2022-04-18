import { useEffect, useState } from "react";

const Checkout = (props) => {

    const[reservedPlaces, setReservedPlaces] = useState([])
    const[totalPrice, setTotalPrice] = useState(0)
    const[booked, setBooked] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9000/seats/reserved")
        .then(response => response.json())
        .then(reservedsArr => {
            setReservedPlaces(reservedsArr)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [props])

    useEffect(() => {
        let tempTotal = 0
        Object.keys(reservedPlaces).forEach(function(key) {
            tempTotal += reservedPlaces[key].price
        });
        setTotalPrice(tempTotal)
    }, [reservedPlaces])

    const bookSeats = () => {
        fetch("http://localhost:9000/seats/booked", {
                method: "PUT",
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ reservedPlaces: reservedPlaces })
            }).then(response => response.json())
            .then((updatedSeats) => {
                props.setSeats(updatedSeats)
                setBooked(true)
            })
            .catch(err => {console.log(err);})
    }

    return ( 
        <div className="col-md-5 col-lg-4 order-md-last">
            <div className={booked ? 'd-none' : 'show'}>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Ausgewählte Plätze</span>
                <span className="badge bg-primary rounded-pill">{reservedPlaces ? reservedPlaces.length : ""}</span>
                </h4>
                <ul className={`list-group mb-3`}>
                    {reservedPlaces.map((rp, i) => 
                        <li key={i} className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Platz {rp.places.seatNr}</h6>
                                <small className="text-muted">Reihe {rp.line}</small>
                            </div>
                            <span className="text-muted">{rp.price.toFixed(2)} €</span>
                        </li>
                    )}
                </ul>
                <ul className={`list-group mb-3 ${totalPrice > 0 ? 'show' : 'd-none'}`}>
                    <li className="list-group-item d-flex justify-content-between bg-success text-light">
                        <h6 className="my-0">Gesamt</h6>
                        <strong>{totalPrice.toFixed(2)} €</strong>
                    </li>
                </ul>
                <button onClick={bookSeats} type="button" className={`w-100 btn btn-lg btn-outline-primary ${reservedPlaces.length === 0 ? 'd-none' : 'show'}`} >Zahlen</button>
            </div>
            <div className={booked ? 'show' : 'd-none'}>
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <p> <img  src="/ok.png" alt="logo" width="20"/> Vielen Dank für Ihre erfolgreiche Ticketbuchung</p> 
                    <p><strong>Wir wünschen Ihnen viel Spaß</strong></p>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setBooked(false)}></button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;