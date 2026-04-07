import React, { useState, useEffect } from 'react';
import {MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const kolkataCentre = [22.5726, 88.3639];

function App(){
  //1. We create a variable  to hold the data coming from IntelliJ
  const [safetyInfo, setSafetyInfo] = useState({score: "Loadinng...", status: "Checking..."});
  //2. This Bridge runs as soon as the map loads
  useEffect(() => {
    fetch("http://localhost:8080/api/score?lighting=1&police=0&crime=9")
    .then(response => response.json())
    .then(data => {
      setSafetyInfo(data);
    })
    .catch(error => {
      console.error("Error", error);
    })
  }, []);

  return(
    <div className = "App">
      {/* 3.This is the UI overlay that shows the Java Data*/}
      <div style={{
        position:'absolute', top:20, left:60, zIndex: 1000,
        background: 'white', padding: '15px', boarderRadius: '10px',
        border: `3px solid ${safetyInfo.status === 'Danger' ? 'red' : '#007bff'}`
      }}>
        <h3 style={{ margin: 0}}>SafeRoute Status</h3>
        <p>Score: <b>{safetyInfo.score}</b></p>
        <p>Condition: <b>{safetyInfo.status}</b></p>
      </div>

      {/*4. The Map Rendering*/}
      <MapContainer center={kolkataCentre} zoom={13} style={{height: "100vh", width: "100%"}} scrollWheelZoom={true}>
        {/*This layer provide the actual map tiles from OpenStreetMap*/}
        <TileLayer
        url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
        />
        {/* Hardcoded RED circle (Danger Zone - e.g, Park Street Area)*/}
        <Circle
        center ={[22.5529, 88.3524]}
        pathOptions ={{color: 'red', fillColor: 'red'}}
        radius={500}
        >
          <Popup>High Alert: Low Lighting Zone</Popup>
        </Circle>

        {/* HardCoded GREEN circle (Safe Zone - e.g, Victoria Memorial Area)*/}
        <Circle
        center ={[22.5448, 88.3426]}
        pathOptions={{color: 'green', fillColor: 'green'}}
        radius={500}
        >
          <Popup>Safe Zone: High Police Presence</Popup>
        </Circle>
      </MapContainer>
    </div>
  );
}
export default App;