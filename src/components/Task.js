import React, { Component } from "react";

class Task extends Component {
  render() {
    const { propiedades } = this.props;
    return (
      <div>
        <p>
          {propiedades.title} - {propiedades.description}
        </p>
      </div>
    );
  }
}
export default Task;
