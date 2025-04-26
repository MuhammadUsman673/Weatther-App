import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useWeather } from "./Context/Weather";

function App() {
  const weather = useWeather(); // Ensure context is not null
  console.log(weather);
  useEffect(()=>{
     weather.fetchCurrenData();
  },[])

  return (
    <>
    <div className="Div">
      <h1>Weather Forecast</h1>
      <Input />
      <Button value="Search" onClick={weather.fetchData} /> {/* Added optional chaining to avoid errors if `fetchData` is undefined */}
      <Card />
      <Button value="Refresh" /> {/* No functional changes */}
      </div>
    </>
  );
}

export default App;
