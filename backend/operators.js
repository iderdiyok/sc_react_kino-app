const fs = require('fs')

function readSeats(){
    return new Promise((resolve, reject) => {
        fs.readFile("./seats.json", "utf-8",  (err, data) =>{
            if(err){
                return reject(err)
            }else{
                const seatsArr = JSON.parse(data)
                resolve(seatsArr)
            }
            
        })
    })
    
}
function saveSeats(SeatList){
    fs.writeFileSync('./seats.json', (JSON.stringify(SeatList, null, 2)), (err) => {
        if (err) {
            console.log('error writing json', err);
            return
        }
    })
}

function setReservedOrBooked(seatsArr, lineLetter, seatId, reservations){
    let newReserved = null
    const updateSeatsArr = 
    seatsArr.map(updateSeat => {
        if(updateSeat.line === lineLetter){
            const seatPlaces = 
            updateSeat.places.map(place => {
                if(place.id === seatId){
                    if(reservations){
                        place.reserved ? newReserved = false : newReserved = true
                        return{...place, reserved: newReserved}
                    }else{
                        return{...place, reserved:false, booked: true}
                    }
                }
                else{
                    return place
                }
            })
            return{...updateSeat, places: seatPlaces}
        }else{
            return updateSeat
        }
    })

    return updateSeatsArr
}
module.exports = {readSeats, saveSeats, setReservedOrBooked}