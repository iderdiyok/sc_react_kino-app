const express = require("express")
const cors = require("cors")
const {readSeats, saveSeats, setReservedOrBooked} = require("./operators")
const { CreateNewJson } = require("./createJson")

const PORT = 9000
const app = express()

app.use((req, _, next) =>{
    console.log("new request:", req.method, req.url);
    next()
})

app.use(cors())
app.use(express.json())

// All Seats
app.get("/seats", (_, res) => {
    readSeats()
    .then((seatsArr) => {res.json(seatsArr)})
})

// All reserved Seats
app.get("/seats/reserved", (_, res) => {
    readSeats()
    .then(seatsArr => {
        const reservedSeats = []
        seatsArr.map(seat => {
            Object.keys(seat.places).forEach(function(key) {
                if(seat.places[key].reserved){
                    const newSeat = {"line":seat.line, "price":seat.price, "places": seat.places[key]}    
                    reservedSeats.push(newSeat)
                }
            });
        })
        res.json(reservedSeats)
    })
})

// Reserved a seat
app.put("/seats/reserved", (req, res) => {
    const lineLetter = req.body.line
    const seatId = req.body.id
    const reservations = true
    readSeats()
    .then(seatsArr => {
        const updateSeatsArr = setReservedOrBooked(seatsArr, lineLetter, seatId, reservations)

        saveSeats(updateSeatsArr)
        res.json(seatsArr)
    })
})

// Booked the reserved seats
app.put("/seats/booked", (req, res) => {
    const reservedArr = req.body.reservedPlaces
    const reservations = false

    readSeats()
    .then(seatsArr => {
        let updateSeatsArr = seatsArr
        reservedArr.map(ra => {
            const lineLetter = ra.line
            const seatId = ra.places.id
            
            updateSeatsArr = setReservedOrBooked(updateSeatsArr, lineLetter, seatId, reservations)
        })
        saveSeats(updateSeatsArr)

        res.json(updateSeatsArr)
    })
    
})

//Reset All Seats
app.get("/seats/reset", (_, res) => {
    CreateNewJson()
    .then(newSeatsArr => {
        res.json(newSeatsArr)
    })
})
app.listen(PORT, () => console.log("Server listenin on Port", PORT))