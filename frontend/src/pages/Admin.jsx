import { useState, useEffect } from "react";
import FreePlaces from "../components/FreePlaces";
import Header from "../components/Header";
import ResetPlaces from "../components/ResetPlaces";
import Sales from "../components/Sales";

const Admin = () => {
    const[seats, setSeats] = useState([])
    const[earn, setEarn] = useState(0)

    useEffect(() => {
        fetch("http://localhost:9000/seats")
        .then(response => response.json())
        .then(seatsArr => {
            setSeats(seatsArr)
        })
        .catch((err) => {
            console.log(err);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <main className='container'>
            <Header />
            <div className="row align-items-md-stretch">
                <FreePlaces seats={seats} earn={earn} setEarn={setEarn}/>
                <Sales seats={seats} earn={earn}/>
            </div>
            <div className="p-5 mt-4 bg-light rounded-3 border">
                <ResetPlaces setSeats={setSeats}/>
            </div>
        </main> 
    );
}
 
export default Admin;