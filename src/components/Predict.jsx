import React, { useState } from "react";
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
  let [pickup, setPickUp] = useState({ value: "" });
  let [dropoff, setDropOff] = useState({ value: "" });
  let [vendor, setVendor] = useState({ value: "" });
  let [payment, setPayment] = useState({ value: "" });
  let [passengerCount, setPassengerCount] = useState(1);
  let dateInputRef = useRef();
  let [responseData, setResponseData] = useState(null);

  const today = new Date();
  const minDate = today.toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  function valuetext(value) {
    return `${value}`;
  }

  const handleDateClick = (e) => {
    e.target.showPicker();
  };

  async function handleSubmit(e) {
    if (
      vendor.value === "" ||
      pickup.value === "" ||
      dropoff.value === "" ||
      payment.value === "" ||
      dateInputRef.current.value === ""
    ) {
      setResponseData({ value: "Please Fill in all fields..." });
      return;
    }
    const data = {
      vendorid: parseInt(vendor.value),
      passenger_count: parseInt(passengerCount),
      pulocationid: parseInt(pickup.value),
      dolocationid: parseInt(dropoff.value),
      payment_type: parseInt(payment.value),
      day: parseInt(dateInputRef.current.value.split("-")[2]),
    };

    try {
      const response = await fetch(
        "https://skilled-raphaela-haxnode-fb7b0818.koyeb.app/receive_data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setResponseData(result);
      console.log(result);
    } catch (error) {
      setResponseData(error.message);
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center w-full">
      <div className="w-full sm:w-3/4 lg:w-1/2">
        <section>
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
                      onChange={(option) => setVendor(option)}
                      options={VendorOptions}
                      className="text-black flex-grow"
                      placeholder="Choose vendor"
                    />
                  </div>

                  <div>
                    <Select
                      required
                      onChange={(option) => setPayment(option)}
                      options={PaymentOptions}
                      className="text-black flex-grow"
                      placeholder="Payment Type"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Select
                    required
                    onChange={(option) => setPickUp(option)}
                    options={options}
                    className="text-black flex-grow"
                    placeholder="Pickup Location"
                  />
                  <Select
                    required
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

                <div className="border p-5 rounded">
                  {responseData?.prediction && (
                    <p className="text-sm">
                      Trip Price : $
                      {responseData?.prediction &&
                        responseData.prediction.toFixed(2)}
                    </p>
                  )}
                  {responseData?.distance_kilometers && (
                    <p className="text-sm">
                      Distance :
                      {responseData?.distance_kilometers &&
                        responseData.distance_kilometers.toFixed(2)}{" "}
                      KM
                    </p>
                  )}
                  {responseData?.duration_minutes && (
                    <p className="text-sm">
                      Trip Price :{" "}
                      {responseData?.duration_minutes &&
                        responseData.duration_minutes.toFixed(2)}{" "}
                      Min
                    </p>
                  )}
                  {responseData?.route_url && (
                    <p className="text-sm text-wrap truncate">
                      Google Maps Route :{" "}
                      {responseData?.route_url &&
                        responseData.route_url}{" "}
                      
                    </p>
                  )}
                  {responseData?.value && (
                    <p className="text-sm text-red-500">
                      {responseData?.value && responseData.value}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
