import React, { useEffect, useState } from "react";
import "./contact.css";
import { useParams } from "react-router-dom";


const Contact = () => {
  const [currentContactDetail, setCurrentContactDetail] = useState();
  const { _id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  //ESTUDAR MELHOR ESSE CASO
  const getData = () => {
    // console.log("PARAM",id)
    fetch(`http://localhost:9002/api/contacts/contact/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("SLUG", data);
        setCurrentContactDetail(data);
      });
  };
  return (
    <div className="contact">
      <div className="contact__intro">
        <img
          className="contact__backdrop"
          src={currentContactDetail?.image_url}
          alt="imagem contato"
        />
      </div>
      <div className="contact__detail">
        <div className="contact__detailLeft">
          <div className="contact__posterBox">
            {/* <img
              className="contact__poster"
              src={currentcontactDetail ? currentcontactDetail.image_url : ""}
            /> */}
          </div>
        </div>
        <div className="contact__detailRight">
          <div className="contact__detailRightTop">
            <div className="contact__name">
              {currentContactDetail ? currentContactDetail.name : ""}
            </div>
            <div
              className={`${
                currentContactDetail?.image_url ? "violet" : "white"
              }`}
            >
              {currentContactDetail ? currentContactDetail.intern_contact : ""}
            </div>
            <div className="contact__rating">
              {/* {currentcontactDetail ? currentcontactDetail.vote_average : ""}{" "} */}
              <i className="fas fa-star" />
              {/* <span className="contact__voteCount">
                {currentcontactDetail
                  ? "(" + currentcontactDetail.vote_count + ") votes"
                  : ""}
              </span> */}
            </div>
            {/* <div className="contact__runtime">
              {currentcontactDetail
                ? currentcontactDetail.runtime + " mins"
                : ""}
            </div> */}
            <div className="contact__releaseDate">
              {currentContactDetail
                ? "Telefone: " + currentContactDetail.phone
                : ""}
            </div>
            <div className="contact__genres">
              {currentContactDetail && currentContactDetail.email ? (
                <>
                  <span className="contact__genre">
                    {currentContactDetail.email}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="contact__detailRightBottom">
            <div className="synopsisText">
              Mini-Curr&iacute;lo (hist&oacute;rico, atividade, atividade atual)
            </div>
            <div>
              {currentContactDetail
                ? currentContactDetail.business_segment
                : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="contact__links">
        <div className="contact__heading">Website</div>
        {currentContactDetail && currentContactDetail.site && (
          <a
            href={currentContactDetail.site}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="contact__homeButton contact__Button">
                Site <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentContactDetail && currentContactDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentContactDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="contact__imdbButton contact__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="contact__heading">Production companies</div>
      <div className="contact__production">
        {currentContactDetail &&
          currentContactDetail.production_companies &&
          currentContactDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="contact__productionComapany"
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

export default Contact;
