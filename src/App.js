import React, { Component } from "react";
import "./App.css";

// importamos el objeto JSON
import TareasJson from "./sample/task.json";
// Para iterar el arreglo de tareas se utiliza
// metodos propios de React, no un bucle for

// importamos el componente Task
import Tasks from "./components/Tasks";

class App extends Component {
  //definimos el estado del JSON
  state = {
    tareas: TareasJson,
  };
  // desde este estado enviamos la informacion al componente Tasks
  render() {
    return (
      <div>
        <Tasks tareas={this.state.tareas} />
      </div>
    );
  }
}

export default App;
