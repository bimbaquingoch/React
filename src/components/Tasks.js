import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    // recorremos el elementos de tareas
    return this.props.trabajo.map((tareas) => (
      <Task propiedades={tareas} key={tareas.id} />
    ));
  }
}

export default Tasks;
