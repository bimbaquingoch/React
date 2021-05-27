import React, { Component } from "react";

// de esta forma tambien se puede exportar
// export default class Formulario extends Component {
class Formulario extends Component {
  EnviarFormulario = (evento) => {
    console.log("Enviando ...");
    // el metodo preventDefault hace que no se
    // recargue la página al enviar el formulario
    evento.preventDefault();
  };

  render() {
    return (
      <form action="" onSubmit={this.EnviarFormulario}>
        <input type="text" placeholder="Escribe una tarea" />
        <br />
        <br />
        <textarea
          name="tarea"
          id=""
          cols="30"
          rows="10"
          placeholder="Descripcion de la tarea ..."
        ></textarea>
        <input type="submit" name="enviar" id="submit" />
      </form>
    );
  }
}

export default Formulario;
