import React, { Component } from "react";

// de esta forma tambien se puede exportar
// export default class Formulario extends Component {
class Formulario extends Component {
  state = {
    title: "",
    description: "",
  };
  EnviarFormulario = (evento) => {
    // el metodo preventDefault hace que no se
    // recargue la página al enviar el formulario
    evento.preventDefault();
    // una vez escrito el titulo y la descripcion, con esto
    // enciando el formulario ya se guardan el estado de estos elementos
    console.log(this.state);
  };

  cambiarInputs = (evento) => {
    this.setState({
      // de manera general le decimos que desde el elemento con
      // name = cualquierName, va a estar ligado al valor de esa
      // etiqueta
      [evento.target.name]: evento.target.value,
    });
    console.log(evento.target.name, "  ", evento.target.value);
  };

  render() {
    return (
      <form action="" onSubmit={this.EnviarFormulario}>
        <input
          type="text"
          name="title"
          placeholder="Escribe una tarea"
          onChange={this.cambiarInputs}
          value={this.state.title}
        />
        <br />
        <br />
        <textarea
          name="description"
          id="descTarea"
          cols="30"
          rows="10"
          placeholder="Descripcion de la tarea ..."
          onChange={this.cambiarInputs}
          value={this.state.description}
        ></textarea>
        <br />
        <br />
        <input type="submit" name="enviar" id="submit" />
      </form>
    );
  }
}

export default Formulario;
