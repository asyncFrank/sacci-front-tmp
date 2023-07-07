import React, { useEffect, useState } from "react";
import "./startup.css";
import { useParams } from "react-router-dom";
const imgAntes =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/antes-da-fazenda.png";

const imgDentro =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/dentro-da-fazenda.png";
const imgDepois =
  "https://radaragtech.com.br/wp-content/uploads/2022/11/icons_Depois-da-Fazenda.png";

const Startup = () => {
  const [currentStartupDetail, setStartup] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  //ESTUDAR MELHOR ESSE CASO
  const getData = () => {
    // console.log("PARAM",id)
    fetch(`http://localhost:5000/api/startups/startup/${id}`)
      .then((res) => res.json())
      .then((data) => setStartup(data));
  };
  return (
    <div className="startup">
      <div className="startup__intro">
        <img
          className="startup__backdrop"
          // src={currentStartupDetail ? currentStartupDetail.image_url : ""}
          src={
            currentStartupDetail?.image_url
              ? currentStartupDetail.image_url
              : currentStartupDetail?.segment === "Antes da Fazenda"
              ? imgAntes
              : currentStartupDetail?.segment === "Dentro da Fazenda"
              ? imgDentro
              : imgDepois
          }
        />
      </div>
      <div className="startup__detail">
        <div className="startup__detailLeft">
          <div className="startup__posterBox">
            {/* <img
              className="startup__poster"
              src={currentStartupDetail ? currentStartupDetail.image_url : ""}
            /> */}
          </div>
        </div>
        <div className="startup__detailRight">
          <div className="startup__detailRightTop">
            <div className="startup__name">
              {currentStartupDetail ? currentStartupDetail.name : ""}
            </div>
            <div className={`${currentStartupDetail?.image_url ? 'violet' : 'white'}`}>
              {currentStartupDetail  ? currentStartupDetail.intern_contact : ""}
            </div>
            <div className="startup__rating">
              {/* {currentStartupDetail ? currentStartupDetail.vote_average : ""}{" "} */}
              <i className="fas fa-star" />
              {/* <span className="startup__voteCount">
                {currentStartupDetail
                  ? "(" + currentStartupDetail.vote_count + ") votes"
                  : ""}
              </span> */}
            </div>
            {/* <div className="startup__runtime">
              {currentStartupDetail
                ? currentStartupDetail.runtime + " mins"
                : ""}
            </div> */}
            <div className="startup__releaseDate">
              {currentStartupDetail
                ? "Telefone: " + currentStartupDetail.phone
                : ""}
            </div>
            <div className="startup__genres">
              {currentStartupDetail && currentStartupDetail.email ? (
                <>
                  <span className="startup__genre">
                    {currentStartupDetail.email}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="startup__detailRightBottom">
            <div className="synopsisText">Descrição</div>
            <div>
              {currentStartupDetail ? currentStartupDetail.description : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="startup__links">
        <div className="startup__heading">Useful Links</div>
        {currentStartupDetail && currentStartupDetail.site && (
          <a
            href={currentStartupDetail.site}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="startup__homeButton startup__Button">
                Site <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentStartupDetail && currentStartupDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentStartupDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="startup__imdbButton startup__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="startup__heading">Production companies</div>
      <div className="startup__production">
        {currentStartupDetail &&
          currentStartupDetail.production_companies &&
          currentStartupDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="startup__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Startup;
