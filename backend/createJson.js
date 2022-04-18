const {readSeats, saveSeats} = require("./operators")
const {nanoid} = require("nanoid")

//Price 9.90
const CreateNewJson = () => {

const allSeats = []
    for(let i = 65; i <= 69; i++){
        const newLine = {
            line: String.fromCharCode(i),
            price: 9.90,
            places: []
        }
        for(let j = 1; j <= 11; j++){
            const newSeat = {
                id: nanoid(),
                seatNr: j,
                reserved: false,
                booked: false
            }
            newLine.places.push(newSeat)
        }
        allSeats.push(newLine)
    }

    //Price 12.90
    for(let i = 70; i <= 75; i++){
        const newLine = {
            line: String.fromCharCode(i),
            price: 12.90,
            places: []
        }
        for(let j = 1; j <= 11; j++){
            const newSeat = {
                id: nanoid(),
                seatNr: j,
                reserved: false,
                booked: false
            }
            newLine.places.push(newSeat)
        }
        allSeats.push(newLine)
    }
    saveSeats(allSeats)
    return allSeats
}

CreateNewJson()
module.exports = {CreateNewJson}