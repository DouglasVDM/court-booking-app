import { useState } from "react";
import Courts from "./components/Courts";
import { bookingsData } from "../bookingsData";
import { courtsData } from "./courtsData";

function App() {
  const [courts, setCourts] = useState(courtsData);
  const [bookings, setBookings] = useState(bookingsData);
  console.log("bookingsData:", bookingsData);
  console.log("courtsData:", courtsData);

  return (
    <>
      <h1>Court Booking App</h1>
      <Courts courts={courts} />
    </>
  );
}

export default App;
