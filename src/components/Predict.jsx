import React, { useState } from "react";
import Select from "react-select";
import zones from "../zones.json";
import Slider from "@mui/material/Slider";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuMapPin } from "react-icons/lu";
import { LuLoader2 } from "react-icons/lu";
import { TextEffect } from "./TextEffect.tsx";
import { useAuth } from "../context/AuthContext.js";
import waving from "../waving.gif";
import taxi from "../driving.gif";

let finalOptions = zones.map((zone) => {
  return {
    value: zone.LocationID,
    label: zone.Zone,
  };
});

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "transparent" : "transparent", // Input background color
    borderColor: state.isFocused ? "white" : "grey",
    color: "white",
    "&:hover": {
      borderColor: "white", // Border color on hover
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white", // Color of the selected option text
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#3498db" : "#fff", // Option background color
    color: state.isFocused ? "#fff" : "#000", // Option text color
    "&:hover": {
      backgroundColor: "#2980b9", // Option background color on hover
      color: "#fff", // Text color on hover
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "transparent", // Menu background color
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white", // Placeholder text color
    // fontStyle: "italic", // Optional: style the placeholder further
  }),
};

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
  let [loading, setLoading] = useState(false);
  let [responseData, setResponseData] = useState(null);
  let { currentUser } = useAuth();
  console.log(currentUser);
  console.log(responseData);

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
      setTimeout(() => {
        setResponseData(null);
        setLoading(false);
      }, 3000);
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
    setLoading(true);
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
    setLoading(false);
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center w-full">
      <div className="w-full sm:w-3/4 lg:w-1/2">
        <TextEffect
          per="char"
          preset="slide"
          className="text-center text-3xl font-semibold mb-14"
        >
          Fare Prediction Service
        </TextEffect>

        <div className="overflow-hidden flex gap-3">
          <div>
            <div className="flex items-center">
              <p className="text-xl">Hello, {currentUser?.displayName}</p>
              <img src={waving} alt="" className="w-10" />
            </div>
            <TextEffect per="char" preset="fade" className="mt-3 mb-5">
              Accurate Fare Estimates for Your Next Ride Planning a trip and
              need a precise fare estimate?
            </TextEffect>
            <TextEffect per="char" preset="scale">
              Our tool uses advanced machine learning and real-time data to give
              you accurate fare predictions. Just enter your trip details, and
              we’ll handle the rest!
            </TextEffect>
          </div>
          <img src={taxi} alt="" className="w-[250px] rounded-xl" />
        </div>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg border p-8 shadow-lg lg:col-span-3 lg:p-10">
              <form action="#" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Select
                      required
                      onChange={(option) => setVendor(option)}
                      options={VendorOptions}
                      className="flex-grow"
                      placeholder="Choose vendor"
                      styles={customStyles}
                    />
                  </div>

                  <div>
                    <Select
                      required
                      onChange={(option) => setPayment(option)}
                      options={PaymentOptions}
                      className="text-black flex-grow"
                      placeholder="Payment Type"
                      styles={customStyles}
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
                    styles={customStyles}
                  />
                  <Select
                    required
                    onChange={(option) => setDropOff(option)}
                    options={options}
                    className="text-black flex-grow"
                    placeholder="Dropoff Location"
                    styles={customStyles}
                  />
                </div>

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

                <div className="mt-4 flex justify-center">
                  <motion.button
                    type="button"
                    className="flex items-center w-full rounded-lg border border-yellow-500 hover:bg-yellow-500 hover:text-black transition px-10 py-3 font-medium text-white sm:w-auto gap-1"
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      duration: "200ms",
                      stiffness: 100,
                    }}
                  >
                    {loading && <LuLoader2 className="animate-spin" />}{" "}
                    Calculate
                  </motion.button>
                </div>
                {/* 
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
                      {responseData?.route_url && responseData.route_url}{" "}
                    </p>
                  )}
                  {responseData?.value && (
                    <p className="text-sm text-red-500">
                      {responseData?.value && responseData.value}
                    </p>
                  )}
                </div> */}
              </form>
            </div>

            {responseData && responseData.prediction && (
              <motion.div
                initial={{ opacity: 0.1, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative mt-6 shadow-md rounded-lg flex justify-center gap-3"
              >
                {/* <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs uppercase border-b text-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 drop-shadow-[0_0_35px_#ffffff]"
                      >
                        Key
                      </th>
                      <th scope="col" className="px-6 py-3 border-l">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap text-stone-100"
                      >
                        Fare Amount
                      </th>
                      <td className="px-6 py-4 border-l">
                        ${responseData.prediction.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap text-stone-100"
                      >
                        Distance
                      </th>
                      <td className="px-6 py-4 border-l">
                        {responseData.distance_kilometers.toFixed(2)} KM
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap text-stone-100"
                      >
                        Duration
                      </th>
                      <td className="px-6 py-4 border-l">
                        {responseData.duration_minutes.toFixed(2)} Min
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap text-stone-100 flex gap-1 items-center"
                      >
                        Route
                      </th>
                      <td className="px-6 py-4 border-l">
                        <a href={responseData.route_url} target="_blank">
                          <LuMapPin className="text-xl" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table> */}

                <motion.div
                  initial={{ opacity: 0.1, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-3 w-40 flex flex-col items-center gap-2 shadow-lg shadow-yellow-400/30 rounded-lg"
                >
                  <p className="text-sm text-yellow-400">Fare Amount</p>
                  <p>${responseData.prediction.toFixed(2)}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.1, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale:1 }}
                  transition={{ delay: 0.1 }}
                  className="py-3 w-40 flex flex-col items-center gap-2 shadow-lg shadow-yellow-400/30 rounded-lg"
                >
                  <p className="text-sm text-yellow-400">Distance</p>
                  <p>{responseData.distance_kilometers.toFixed(2)} KM</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.1, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="py-3 w-40 flex flex-col items-center gap-2 shadow-lg shadow-yellow-400/30 rounded-lg"
                >
                  <p className="text-sm text-yellow-400">Duration</p>
                  <p>{responseData.duration_minutes.toFixed(2)} Min</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.1, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="py-3 w-40 flex flex-col items-center gap-2 shadow-lg shadow-yellow-400/30 rounded-lg"
                >
                  <p className="text-sm text-yellow-400">Route</p>
                  
                  <a href={responseData.route_url} target="_blank" rel="noreferrer">
                    <LuMapPin className="text-xl" />
                  </a>
                </motion.div>
              </motion.div>
            )}
            <AnimatePresence>
              {responseData && responseData.value && (
                <motion.p
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="py-2 px-4 text-red-500 rounded-lg border mb-3"
                >
                  {responseData.value}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
}
