const Sales = (props) => {
    return (
        <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2 className="fw-bold border-bottom pb-3">Gesamtumsatz</h2>
          <h1 className="p-5 text-light bg-success rounded">{(props.earn).toFixed(2)} €</h1>
        </div>
      </div>
    );
}
 
export default Sales;