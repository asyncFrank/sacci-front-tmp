import React, { useEffect, useState } from "react";
import "./InterNav.css";

function InternNav() {
  const [show, handleShow] = useState(false);

  const transitionInternNavbar = () => {
    if (window.scrollY > 100) {
      console.log('opa ultrapassou')
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    console.log('useEffect dentro do InternNav')
    window.addEventListener("scroll", transitionInternNavbar);
    return () => window.removeEventListener("scroll", transitionInternNavbar);
  }, []);

  return (
    <div className={`internNav ${show && "internNav__black"}`}>
      <h1>Pr&eacute;visualiza&ccedil;&atilde;o Startups</h1>
    </div>
  );
}

export default InternNav;
