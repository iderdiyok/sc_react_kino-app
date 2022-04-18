import { useState, useEffect } from "react";

const FreePlaces = (props) => {
    const [freePlaces, setFreePlaces] = useState(0)
    const [soldPlaces, setSoldPlaces] = useState(0)

    useEffect(()=> {
        props.seats.map(s => {
            s.places.map(p => {
                if(p.booked){
                    setSoldPlaces(prev => prev + 1)
                    props.setEarn(prev => prev + s.price)
                }else{
                    setFreePlaces(prev => prev + 1)
                }
            })
        })
    },[props.seats])

    return (
        <div className="col-md-6">
            <div className="h-100 p-5 bg-light rounded-3 border">
                <h3>Aktuell freie Plätze</h3>
                <h1 className="fw-bold border-bottom pb-3 text-success">{freePlaces}</h1>
                <h3 className="mt-4">Aktuell belegte Plätze</h3>
                <h1 className="fw-bold b-3 text-danger">{soldPlaces}</h1>
            </div>
      </div>
    );
}
 
export default FreePlaces;