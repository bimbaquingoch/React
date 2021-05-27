import React, { Component } from "react";
import "./App.css";

// const HolaMundo = (props) => {
class HolaMundo extends Component {
  state = {
    show: true,
  };

  // a esta funcion no se le declara porque al
  // estar dentro de la clase, JS lo toma como metodo
  cambiarState = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div>
          <h1 className="mensaje">
            Este es el componenete {this.props.numero}
          </h1>
          <h3>{this.props.elTexto}</h3>
          <button onClick={this.cambiarState}>Switch state</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No hay elementos</h1>
          <button onClick={this.cambiarState}>Switch state</button>
        </div>
      );
    }
  }
}

const App = () => {
  // class App extends Component {
  // render() {
  return (
    <div>
      <HolaMundo numero="1" elTexto="el h3 del componenete 1" />
      <HolaMundo numero="2" elTexto="UN texto cualquiera" />
    </div>
  );
  // }
};

export default App;
