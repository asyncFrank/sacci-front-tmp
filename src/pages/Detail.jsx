import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import "./detail.css";
const Detail = ({ contact }) => {
  return (
    <div className="container">
      <img
        src={
          contact?.image_url !== "NA"
            ? contact?.image_url
            : "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-19.jpg"
        }
        alt={contact?.name}
        width="100px"
        height="100px"
      />
      <p className="highlightName">Nome: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Telefone: {contact.telefone}</p>
      <p>Cidade: {contact.city}</p>
      <p>UF: {contact.state}</p>
      <p>Profissão: {contact.profession}</p>
     {
      contact?.contact_type ==='PJ' ? ( <p>Contato Interno: {contact?.intern_contact}</p>):('')
     }
      <p className="highlight">Cultura: {contact.planting_culture}</p>
      <p>{contact.business_segment}</p>
      {contact?.linkedin && contact?.linkedin !== "--" ? (
        <a href={contact.linkedin} target="_blank">
          <AiOutlineLinkedin className="socialIcon" />
        </a>
      ) : (
        ""
      )}
      <p>Especialidades: {contact.specialties}</p>
      <p>Obs.:<strong>{contact?.observation}</strong></p>
    </div>
  );
};

export default Detail;
