import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const prices = {
  apata: {
    bashorun: 500,
    challenge: 200,
    gate: 300,
    "iyana-church": 600,
    iworoad: 400,
    "new garage": 200,
    moniya: 400,
    dugbe: 350,
    akobo: 500,
    olodo: 650,
    olorunda: 700,
    mokola: 200,
    sango: 300,
  },
  //... other prices
};

const bookedSeats = new Set();

const Book = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState("Price: Not available");
  const [seatNumber, setSeatNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (from && to) {
      const calculatedPrice = prices[from]?.[to] || prices[to]?.[from];
      setPrice(
        calculatedPrice ? `Price: ₦${calculatedPrice}` : "Price: Not available"
      );
    }
  }, [from, to]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state

    if (bookedSeats.has(seatNumber)) {
      setError("This seat is already booked. Please choose another seat.");
      return;
    }

    const bookingDetails = {
      bookingfrom: from,
      bookingto: to,
      bookingprice: price.replace("Price: ₦", ""), // Extract numeric value
      bookingseatNumber: seatNumber,
      bookingdate: date,
      bookingtime: time,
    };

    try {
      const response = await fetch("https://pi-drive-1.onrender.com/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYW1zZWxyYXR0dXNzQGdtYWlsLmNvbSIsImV4cCI6MTcyMzY5MzU4NH0.xa0jToVXgwIn1_q4YOCPi3QKyg1PgiyqIJyOBIJhj1s`,
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        bookedSeats.add(seatNumber); // Mark seat as booked
        navigate("/payment"); // Redirect to payment page
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during booking:", error);
      setError("An error occurred. Please try again later.");
    }
  };


  return (
    <div className="container mt-10 flex flex-col h-screen w-screen laptop:ml-10 laptop:items-left laptop:justify-left">
      <h3 className="text-center text-4xl text-blue-800 leading-7 font-bold">Book a Seat</h3>

      {error && (
        <p className="text-red-600 text-center mt-4 mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="w-[300px] ml-10 mt-5 tablet:w-[650px] laptop:w-[1200px]">
        <div className="form-group mb-4">
          <label htmlFor="from" className="font-semibold text-lg leading-5">From</label>
          <select
            id="from"
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 border border-[#1877F2] text-[#478ECC] rounded"
          >
            <option value="" disabled>
              Terminal
            </option>
            <option value="apata">Apata</option>
            <option value="bashorun">Bashorun</option>
            <option value="challenge">Challenge</option>
            <option value="gate">Gate</option>
            <option value="iyana-church">Iyana-Church</option>
            <option value="iworoad">Iwo-Road</option>
            <option value="new garage">New Garage</option>
            <option value="moniya">Moniya</option>
            <option value="dugbe">Dugbe</option>
            <option value="ojurin">Ojurin</option>
            <option value="olodo">Olodo</option>
            <option value="olorunda">Olorunda</option>
            <option value="mokola">Mokola</option>
            <option value="sango">Sango</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="to" className="font-semibold text-lg leading-5">To</label>
          <select
            id="to"
            name="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-2 border rounded border-[#1877F2] text-[#478ECC]"
          >
            <option value="" disabled>
              Terminal
            </option>
            <option value="bashorun">Bashorun</option>
            <option value="apata">Apata</option>
            <option value="challenge">Challenge</option>
            <option value="gate">Gate</option>
            <option value="iyana-church">Iyana-Church</option>
            <option value="iworoad">Iwo-Road</option>
            <option value="new garage">New Garage</option>
            <option value="moniya">Moniya</option>
            <option value="dugbe">Dugbe</option>
            <option value="ojurin">Ojurin</option>
            <option value="olodo">Olodo</option>
            <option value="olorunda">Olorunda</option>
            <option value="mokola">Mokola</option>
            <option value="sango">Sango</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="date" className="font-semibold text-lg leading-5">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded border-[#1877F2] text-[#478ECC]"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="time" className="font-semibold text-lg leading-5">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded border-[#1877F2] text-[#478ECC]"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="seat-number" className="font-semibold text-lg leading-5">Seat Number</label>
          <select
            id="seat-number"
            name="seat-number"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            className="w-full p-2 border rounded border-[#1877F2] text-[#478ECC]"
          >
            <option value="" disabled>
              Choose
            </option>
            {Array.from({ length: 60 }, (_, i) => i + 1).map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="price-label" className="font-semibold text-lg leading-5">Price</label>
          <input
            type="text"
            id="price-label"
            name="price"
            value={price}
            readOnly
            className="w-full p-2 border rounded border-[#1877F2] text-[#478ECC] bg-gray-100"
          />
        </div>
        <div className="flex gap-10 justify-end">
          <button
            type="submit"
            className="proceed-button bg-blue-500 font-bold text-white p-2 rounded laptop:w-[302px] tablet:w-[302px] border-[#1877F2] text-[#478ECC]"
          >
            Book Now
          </button>
          <NavLink className="form-buttons flex justify-between" to="/welcomePage">
            <button
              type="button"
              className="back-button font-bold w-[100px] p-2 rounded tablet:w-[302px] laptop:w-[302px] border-[#FDB64E] border text-[#F8981D]"
            >
              Back
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Book;
