import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";
import "./team.css";

import { Link } from "react-router-dom";
import { instance1 } from "../utils/axios";
import requests from "../utils/requests";

function ContactSideBySide() {
  const [contacts, setContacts] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await instance1.get(requests.fetchAllContacts);

      setContacts(request.data);
      return request.data;
    }
    fetchData();
  }, []);
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contatos</h2>
          <div className="subtitle">Lista de 1000</div>
        </div>
        <Row>
          {contacts.map((contact) => {
            return (
              <Col sm={2} key={contact._id}>
                <div className="image">
                  <Image
                    src={
                      contact.image_url !== "NA"
                        ? contact.image_url
                        : "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-19.jpg"
                    }
                  />
                  <div className="overlay">
                    <div className="socials">
                      <ul key={contact._id}>
                        {contact.facebook != null &&
                        contact.facebook !== "--" ? (
                          <li key={contact._id}>
                            <a href={contact.facebook}>
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                        ) : (
                          ""
                        )}

                        {contact.instagram != null &&
                        contact.instagram !== "--" ? (
                          <li key={contact._id}>
                            <a href={contact.instagram}>
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        ) : (
                          ""
                        )}
                        {contact.linkedin != null &&
                        contact.linkedin !== "--" ? (
                          <li key={contact._id}>
                            <a href={contact.linkedin}>
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <Link
                    to={`/contact/${contact._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                    target="#teams"
                  >
                    <h4>{contact.name}</h4>
                    <span className="designation">{contact.city}</span>
                    <span className="designation">{contact.state}</span>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default ContactSideBySide;
