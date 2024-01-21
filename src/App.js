import './App.css';
import React, { useEffect, useState } from "react";

function App() {
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result,process.env.REACT_APP_API_URL);
    });
  }
  fetchData();
}, [lat,long])
  return (
    <div className="App">
    </div>
  );
}

export default App;
