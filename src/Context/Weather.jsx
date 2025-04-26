import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity,getWeatherDataForLocation } from "../api/Index";

export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null); // Corrected: `cityName` renamed to `setCity`.
  const fetchData = async () => {
    try {
      const response = await getWeatherDataForCity(city); // Uses the `city` state variable
      setData(response); // Updates the `data` state with the fetched response
    } catch (error) {
      console.error("Error fetching weather data:", error); // Logs errors for debugging
    }
  };
  let fetchCurrenData=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataForLocation(position.coords.latitude,position.coords.longitude)
        .then((data)=>setData(data)) 
    })
  }

  return (
    <WeatherContext.Provider value={{ data, city, fetchData, setCity ,fetchCurrenData   }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

 

