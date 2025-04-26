import React from "react";
import { useWeather } from "../Context/Weather";

const Input = () => {
  const weather = useWeather();

//   console.log("Weather", weather); // Logs the weather context

  return (
    <input
      className="input"
      placeholder="Search Here"
      value={weather.city || ""} // Fixed: Added fallback for `undefined` value.
      onChange={(e) => weather.setCity(e.target.value)} // Correctly updates the city state.
    />
  );
};

export default Input;
 