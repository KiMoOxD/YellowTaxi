import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Select from "react-select";
import zones from "../zones.json";
import Slider from "@mui/material/Slider";
import { useRef } from "react";


let finalOptions = zones.map((zone) => {
  return {
    value: zone.LocationID,
    label: zone.Zone,
  };
});

const options = finalOptions;
const VendorOptions = [
  { value: 1, label: "Creative Mobile Technologies" },
  { value: 2, label: "VeriFone Inc." },
];
const PaymentOptions = [
  { value: 1, label: "Credit Card" },
  { value: 2, label: "Cash" },
];

export default function Predict() {
  let { currentUser } = useAuth();
  let [pickup, setPickUp] = useState(null);
  let [dropoff, setDropOff] = useState(null);
  let [vendor, setVendor] = useState(null);
  let [payment, setPayment] = useState(null);
  let [passengerCount, setPassengerCount] = useState(1);
  const dateInputRef = useRef(null);
  let [responseData, setResponseData] = useState(null)


  const today = new Date();
  const minDate = today.toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  console.log(minDate);

  function valuetext(value) {
    return `${value}`;
  }

  const handleDateClick = (e) => {
    e.target.showPicker();
  };

  async function handleSubmit(e) {
    const data = {
      vendorid: parseInt(vendor.value),
      passenger_count: parseInt(passengerCount),
      pulocationid: parseInt(pickup.value),
      dolocationid: parseInt(dropoff.value),
      payment_type: parseInt(payment.value),
      day: parseInt(dateInputRef.current.value.split('-')[2])
  };

  console.log(data)
  try {
      const response = await fetch('https://skilled-raphaela-haxnode-fb7b0818.koyeb.app/receive_data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setResponseData(result)
      console.log(responseData)
  } catch (error) {
    setResponseData(error.message)
  }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center w-full">
      <div className="w-full sm:w-3/4 lg:w-1/2">
        <section>
          <p>{responseData?.prediction}</p>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg border p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col items-center justify-center px-2">
                    <p className="text-xs">Number of Passengers:</p>
                    <Slider
                      aria-label="Passengers"
                      value={passengerCount}
                      onChange={(e, val) => setPassengerCount(val)}
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={1}
                      max={6}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="dateInput">
                      Day
                    </label>
                    <input
                      type="date"
                      id="dateInput"
                      name="dateInput"
                      min={minDate}
                      step="1"
                      ref={dateInputRef}
                      onClick={handleDateClick}
                      className="w-full dark:[color-scheme:dark] text-white rounded-lg bg-transparent outline-none border border-gray-200 p-2 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Select
                      required
                      value={vendor}
                      onChange={(option) => setVendor(option)}
                      options={VendorOptions}
                      className="text-black flex-grow"
                      placeholder="Choose vendor"
                    />
                  </div>

                  <div>
                    <Select
                      required
                      value={payment}
                      onChange={(option) => setPayment(option)}
                      options={PaymentOptions}
                      className="text-black flex-grow"
                      placeholder="Payment Type"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                  <Select
                    required
                    value={pickup}
                    onChange={(option) => setPickUp(option)}
                    options={options}
                    className="text-black flex-grow"
                    placeholder="Pickup Location"
                  />
                  <Select
                    required
                    value={dropoff}
                    onChange={(option) => setDropOff(option)}
                    options={options}
                    className="text-black flex-grow"
                    placeholder="Dropoff Location"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    onClick={handleSubmit}
                  >
                    Calculate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
