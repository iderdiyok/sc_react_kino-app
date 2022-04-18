const ResetPlaces = (props) => {
  const resetSeats = () => {
    fetch("http://localhost:9000/seats/reset")
    .then(response => response.json())
    .then(newSeatsArr => {
      props.setSeats(newSeatsArr)
    })
    .catch((err) => {
        console.log(err);
    });
  }
  return (
      <div className="container-fluid py-3">
      <h1 className="display-5 fw-bold">Kino zurücksetzen</h1>
      <p className="col-md-8 fs-4">Wenn Sie die Plätze im Kino leeren möchten, drücken Sie die Taste unten.</p>
      <button className="btn btn-danger btn-lg" type="button" onClick={resetSeats}>zurücksetzen</button>
    </div>
  );
}

export default ResetPlaces;