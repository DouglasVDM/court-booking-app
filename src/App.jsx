import { useState } from "react";
import Court from "./components/Court";
import { bookingsData } from "../bookingsData";
import { courtsData } from "./courtsData";

function App() {
  const [courts, setCourts] = useState(courtsData);
  const [bookings, setBookings] = useState(bookingsData);
  console.log('bookingsData:',bookingsData)
  console.log('courtsData:',courtsData)

  return (
    <>
      <h1>Court Booking App</h1>
      <Court courts={courts} />
    </>
  );
}

export default App;
