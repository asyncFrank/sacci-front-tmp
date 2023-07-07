import React, { useEffect, useState } from "react";
// import backgroundImage from "../data/randy-fath-dDc0vuVH_LU-unsplash.jpg";
import axios from "../utils/axios";
import requests from "../utils/requests";

import "./Banner.css";

function Banner() {
  //startup para o Banner (apenas 1 e randômica)
  const [startup, setStartup] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchAllStartups);

      setStartup(
        request.data[Math.floor(Math.random() * request.data.length - 1)]
      );
      return request.data;
    }
    fetchData();
    // console.log("RESULTADO...", startup);
    // console.log("imagem..", startup?.image_url);
  }, []);

  // para o campo business_segment que é conteudo longo
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      // style={{
      //   backgroundSize: "cover",
      //   // backgroundImage: `url(${backgroundImage})`,
      //   // backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfGrgAN4cFADeOdPK-TAMlQuNSpKW76yGYg&usqp=CAU')`,
      //   backgroundImage: `url(${startup?.image_url})`,
      //   backgroundPosition: "center center",
        
      // }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{startup?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(startup?.classification, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
