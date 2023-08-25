import React, { Component } from "react";

class Detalhes extends Component {
  render() {
    const  contact  = this.props;

    return (
      <div>
        {/* Renderize os detalhes aqui */}
        <p>Detalhes: {contact.city}</p>
      </div>
    );
  }
}

export default Detalhes;
