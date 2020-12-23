import React, { Component } from "react";

class MiComponent extends Component {
  render() {
    let persona = {
      nombre: "Luis Miguel",
      apellidos: "Echeverry Arroyave",
      hijos: 1,
      estudios: ["primaria", "bachillerato", "universitario"],
    };
    return (
      <React.Fragment>
        <h1>Mi primer componente</h1>
        <h3>{"nombre: " + persona.nombre + " " + persona.apellidos}</h3>
        <ol>
          {persona.estudios.map((estudio, i) => {
            return <li key={i}>{estudio}</li>;
          })}
        </ol>
        <hr />
      </React.Fragment>
    );
  }
}

export default MiComponent;
