import React, { useState } from "react";
import { Link } from "react-router-dom";
// IoPersonAddOutline
import { IoPersonAddOutline, IoPersonAdd } from "react-icons/io5";
import { BsCheck,BsPerson,BsFillPersonCheckFill } from "react-icons/bs";

import styled from "styled-components";

const imgAntes =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/antes-da-fazenda.png";

const imgDentro =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/dentro-da-fazenda.png";
const imgDepois =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/icons_Depois-da-Fazenda.png";

function Card({ startupData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);

  // const navigate = useNavigate();

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={
          startupData.image_url
            ? startupData.image_url
            : startupData.segment === "Antes da Fazenda"
            ? imgAntes
            : startupData.segment === "Dentro da Fazenda"
            ? imgDentro
            : imgDepois
        }
        alt={startupData.name}
      />

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={
                startupData.image_url
                  ? startupData.image_url
                  : startupData.segment === "Antes da Fazenda"
                  ? imgAntes
                  : startupData.segment === "Dentro da Fazenda"
                  ? imgDentro
                  : imgDepois
              }
              alt={startupData.name}
            />
            {/* <video
              src={video}
              autoPlay
              muted
              loop
              onClick={() => navigate("/player")}
            /> */}
          </div>
          <Link
            to={`/startup/${startupData.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="info-container flexContainer columnContainer">
              <h3 className="name">{startupData.name}</h3>
              <h4>
                {startupData.city} - {startupData.state}
              </h4>

              <div className="segment flexSlider">
                <ul className="flexSlider">
                  <li key={startupData.id}>{startupData.segment}</li>
                </ul>
              </div>
            </div>
          </Link>
          <div className="icons flexSlider ">
            <div className="controls flexSlider j-between"></div>
            <BsPerson title="Adicionar" /> <span> | </span>
            <BsFillPersonCheckFill title="Remover" />
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 230px;
  width: 230px;

  height: 100%;
  cursor: pointer;
  position: relative;

  img {
    border-radius: 0.2rem;
    width: 60%;
    height: 60%;
  }
  .hover {
    z-index: 90;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;

    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 96%;
        height: 100px;
        object-fit: contain;
        /* object-fit: contain; */
        border-radius: 0.3rem;
        top: 0.5rem;
        right: 0.3rem;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
      h3 {
        font-weight: 700;
      }
      h4 {
        color: #7352ff;
      }
      .info {
        font-size: 0.8rem;
      }
    }

    .icons {
      .controls {
        display: flex;
        gap: 0.3rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
  }
`;

export default Card;
