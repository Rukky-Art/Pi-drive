import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useToken } from "../hooks/useToken,jsx";

// Price data for different locations
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
  mokola: {
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
    apata: 200,
    sango: 300,
  },
  newGarage: {
    bashorun: 500,
    challenge: 200,
    gate: 300,
    "iyana-church": 600,
    iworoad: 400,
    "apata": 200,
    moniya: 400,
    dugbe: 350,
    akobo: 500,
    olodo: 650,
    olorunda: 700,
    mokola: 200,
    sango: 300,
  },
  bashorun: {
    apata: 500,
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
  gate: {
    bashorun: 500,
    challenge: 200,
    apata: 300,
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
  iworoad: {
    bashorun: 500,
    challenge: 200,
    gate: 300,
    "iyana-church": 600,
    "new garage": 200,
    moniya: 400,
    dugbe: 350,
    akobo: 500,
    olodo: 650,
    olorunda: 700,
    mokola: 200,
    sango: 300,
  },
  dugbe: {
    bashorun: 500,
    challenge: 200,
    gate: 300,
    "iyana-church": 600,
    iworoad: 400,
    "new garage": 200,
    moniya: 400,
    apata: 350,
    akobo: 500,
    olodo: 650,
    olorunda: 700,
    mokola: 200,
    sango: 300,
  },
  akobo: {
    bashorun: 500,
    challenge: 200,
    gate: 300,
    "iyana-church": 600,
    iworoad: 400,
    "new garage": 200,
    moniya: 400,
    dugbe: 350,
    apata: 500,
    olodo: 650,
    olorunda: 700,
    mokola: 200,
    sango: 300,
  },
  sango: {
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
    apata: 300,
  },
  // Add other price data here...
};

// A set to keep track of booked seats
const bookedSeats = new Set();

const Book = () => {
  // State variables for form fields and error handling
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState("Price: Not available");
  const [seatNumber, setSeatNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState(null);

  const { token } = useToken(); // Use the token from the context
  const navigate = useNavigate();

  // Calculate the price based on selected locations
  useEffect(() => {
    if (from && to) {
      const calculatedPrice = prices[from]?.[to] || prices[to]?.[from];
      setPrice(
        calculatedPrice ? `Price: ₦${calculatedPrice}` : "Price: Not available"
      );
    }
  }, [from, to]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state

    // Check if the seat is already booked
    if (bookedSeats.has(seatNumber)) {
      setError("This seat is already booked. Please choose another seat.");
      return;
    }

    // Create an object with booking details
    const bookingDetails = {
      bookingfrom: from,
      bookingto: to,
      bookingprice: price.replace("Price: ₦", ""), // Extract numeric value
      bookingseatNumber: seatNumber,
      bookingdate: date,
      bookingtime: time,
    };

    try {
      // Make a POST request to the booking API
      const response = await fetch("https://pi-drive-1.onrender.com/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYW1AZ21haWwuY29tIiwiZXhwIjoxNzIzNzQ4ODgwfQ.ru90r-QfiOUc99xLR7pturcX7N-Rvo-RGzckH5U-Vuo", // Use the token from the context
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        // If the booking is successful, mark the seat as booked
        bookedSeats.add(seatNumber);
        navigate("/payment"); // Redirect to the payment page
      } else {
        // If the booking fails, show the error message
        const errorData = await response.json();
        setError(errorData.message || "An Error has been identified, kindly wait!.");
      }
    } catch (error) {
      console.error("Error during booking:", error);
      setError("An error occured, try again later.");
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
            <option value="iworoad">Iwo-Road</option>
            <option value="new garage">New Garage</option>
            <option value="moniya">Moniya</option>
            <option value="dugbe">Dugbe</option>
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
            <NavLink to='/payment'>  Book Now
            </NavLink>
           
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
