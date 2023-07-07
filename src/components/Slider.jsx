import React, { useEffect, useState } from "react";
import CardSlider from "./CardSlider";
import requests from "../utils/requests";
import axios from "../utils/axios";
import { styled } from "styled-components";

// const imgNA =
//   "https://radaragtech.com.br/wp-content/uploads/2022/11/antes-da-fazenda.png";

function Slider() {
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
    <Container>
      {classifications.map((classification) => (
        <CardSlider
          title={classification.name}
          data={classification.startups}
          total = {classification.startups.length}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
background-color: black;
color:white;
`;

export default Slider;
