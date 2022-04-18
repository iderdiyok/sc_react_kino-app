import { useState } from 'react';
import './main.css';
import HallPlan from '../components/HallPlan';
import Header from '../components/Header';
import Heroes from '../components/Heroes';

function Home() {
  const[seats, setSeats] = useState([])
  return (
    <main className='container'>
      <Header />
      <Heroes />
      <HallPlan seats={seats} setSeats={setSeats}/>
    </main>
  );
}

export default Home;
