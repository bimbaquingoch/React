import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
// primero instalar react-router-dom
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

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

  deleteTask = (id) => {
    const newTask = this.state.tareas.filter((tarea) => tarea.id !== id);
    // guardamos el state ocultando los elementos
    this.setState({
      tareas: newTask,
    });
  };

  checkDone = (id) => {
    const newTask = this.state.tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.done = !tarea.done;
      }
      return tarea;
    });
    // una vez cambiado el estado de done, lo guarados en
    // el state usando setState
    this.setState({ tareas: newTask });
  };

  // desde este estado enviamos la informacion al componente Tasks
  render() {
    return (
      <div>
        {/*
        Las rutas van dentro de Router y Route es la ruta
        */}
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Formulario addTarea={this.addTarea} />
                  <Tasks
                    tareas={this.state.tareas}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          />
          <Route exact path="/posts" component={Posts} />
        </Router>

        {/* <Posts /> */}
      </div>
    );
  }
}

export default App;
