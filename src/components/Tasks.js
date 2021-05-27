import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    // recorremos el elementos de tareas
    // y se genera una única tarea
    // este componente toma los datos y los envia al
    // componente Task
    return this.props.tareas.map((e) => <Task propiedades={e} key={e.id} />);
  }
}

export default Tasks;
