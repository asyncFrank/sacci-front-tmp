import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";
import "./Row.css";

const imgAntes =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/antes-da-fazenda.png";

const imgDentro =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/dentro-da-fazenda.png";
const imgDepois =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/icons_Depois-da-Fazenda.png";

function Row({ isLargeRow = false }) {
  //lista classifications e respectivas startups
  const [classifications, setClassifications] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchClassificationsAndStartups);

      setClassifications(request.data);
      return request.data;
    }
    fetchData();
  }, []);

  return (
    <>
      {classifications.map((classification) => (
        <div className="row">
          <h2>
            {classification.name} <span>{classification.startups.length}</span>
          </h2>
          <div className="row__posters">
            {classification.startups.map((startup) => (
              <>
                <img
                  className="row__poster"
                  src={
                    startup.image_url
                      ? startup.image_url
                      : startup.segment === "Antes da Fazenda"
                      ? imgAntes
                      : startup.segment === "Dentro da Fazenda"
                      ? imgDentro
                      : imgDepois
                  }
                  alt={startup.name}
                  key={startup.name}
                />
                <div className="info">
                  <span className="name">Shuper Shoe 1</span>
                  <span className="dataOne">alguma coisa</span>
                  <span className="dataTwo">kjjkdjd </span>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Row;
