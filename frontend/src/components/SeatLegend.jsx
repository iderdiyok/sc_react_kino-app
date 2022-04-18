const SeatLegend = () => {
    return ( 
        <ul className="list-unstyled d-flex justify-content-center m-5 gap-3">
            <li><span className="py-1 px-3 m-1 border border-dark active"></span>Eigene Sitze</li>
            <li><span className="py-1 px-3 m-1 border border-dark user"></span>Belegt</li>
            <li><span className="py-1 px-3 m-1 border border-dark bg-light bg-gradient"></span>Parkett</li>
            <li><span className="py-1 px-3 m-1 border border-dark bg-secondary"></span>Loge</li>
        </ul>
     );
}
 
export default SeatLegend;