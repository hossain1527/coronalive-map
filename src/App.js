import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import "./App.css";
import axios from "axios";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import GoogleMapReact from "google-map-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [latest, setLatest] = useState([]);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries"),
      ])
      .then((response) => {
        setLatest(response[0].data);
        setOutput(response[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  console.log(output);

  const countryLocation = output.map((data, i) => {
    return (
      <div
        className="container"
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
          color: "red",
          backgroundColor: "#FFF",
          height: "40px",
          width: "70px",
          borderRadius: "30%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <img height="10px" src={data.countryInfo.flag} /> rec:
        {data.todayRecovered}
        <br />
        dth:{data.todayDeaths}
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <h2 className="main-caption">
          C
          <FontAwesomeIcon className="pl-2 corona-icon" icon={faVirus} />
          vid-19 Tracking Map
          <FontAwesomeIcon
            className="pl-2 europe-icon"
            icon={faGlobeAmericas}
          />
        </h2>
        <h5 id="sub-heading">Number of recovered and deaths (daily)</h5>
        <Summary />
        <br />
      </div>
      <div style={{ height: "100vh", width: "100vw" }}>
        <GoogleMapReact
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDQd9Qq69rGOEiC2D0vQWo1PRxPr4uarI4"
          }
          defaultCenter={{ lat: 38.722252, lng: -9.139337 }}
          defaultZoom={4}
        >
          {countryLocation}
        </GoogleMapReact>
      </div>
    </>
  );
}

export default App;
