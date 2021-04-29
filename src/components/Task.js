import React, { Component } from "react";

class Tasks extends Component {
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
export default Tasks;
