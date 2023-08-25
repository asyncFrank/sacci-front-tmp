import React, { useEffect, useState } from "react";

import { instance2 } from "../utils/axios";
import requests from "../utils/requests";

import "./Banner.css";

function Banner() {
  //startup para o Banner (apenas 1 e randômica)
  const [startup, setStartup] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance2.get(requests.fetchAllStartups);

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
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">{startup?.name}</h1>
        {/* <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div> */}
        <h1 className="banner__description">
          {truncate(startup?.classification, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
