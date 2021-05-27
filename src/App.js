import React, { Component } from "react";
import "./App.css";

// importamos el objeto JSON
import TareasJson from "./sample/task.json";
// Para iterar el arreglo de tareas se utiliza
// metodos propios de React, no un bucle for

// importamos el componente Task
import Tasks from "./components/Tasks";

// formularios con React
import Formulario from "./components/Formulario";

class App extends Component {
  //definimos el estado del JSON
  state = {
    tareas: TareasJson,
  };

  // Unir los datos del formulario
  // esta funcion se le asigna al <Formulario/> como un prop
  // entonces desde el archivo Formulario.js
  // ya se puede acceder a esta funcion
  addTarea = (title, description) => {
    const NuevaTarea = {
      title: title,
      description: description,
      // el id se aumenta automaticamente cada que se
      // se añade una nueva tarea
      id: this.state.tareas.length,
    };
    // la nueva tarea la estamos asignando al estado
    // declarado arriba y entonces se sobreescribe
    this.setState({
      tareas: [...this.state.tareas, NuevaTarea],
    });
  };

  // desde este estado enviamos la informacion al componente Tasks
  render() {
    return (
      <div>
        <Formulario addTarea={this.addTarea} />
        <Tasks tareas={this.state.tareas} />
      </div>
    );
  }
}

export default App;
