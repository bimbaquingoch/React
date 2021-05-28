import React, { Component } from "react";
// import "./style.css";

// nos ayudan a marcar el tipo de dato
// que es el prop que estamos recibiendo
import PropTypes from "prop-types";

class Task extends Component {
  styleCompleto() {
    return {
      fontSize: "20px",
      color: this.props.propiedades.done ? "blue" : "green",
    };
  }

  render() {
    const { propiedades } = this.props;
    return (
      // y aquí muestra por pantalla la información que le llega
      // desde App, pasa por Task y se muestra desde aquí
      <p className="redi" style={this.styleCompleto()}>
        {propiedades.title} -{propiedades.description} -{propiedades.id} -
        {propiedades.done}
        <input
          type="checkbox"
          onChange={this.props.checkDone.bind(this, propiedades.id)}
        />
        <button
          style={btnDelete}
          onClick={this.props.deleteTask.bind(this, propiedades.id)}
        >
          X
        </button>
      </p>
    );
  }
}

Task.propTypes = {
  propiedades: PropTypes.object.isRequired,
};

const btnDelete = {
  background: "red",
  fontSize: "20px",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
};
export default Task;
