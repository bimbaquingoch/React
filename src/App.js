import React, { Component } from "react";
import "./App.css";
import tareas from "./sample/task.json";
import Tasks from "./components/Tasks";

// function Helloworld(props) {
//   return (
//     <div className="hola_mundo">
//       <h1>Suntitulo: {props.subtitle}</h1>
//       <h2>vengo de la funcion {props.mytext}</h2>
//     </div>
//   );
// }

// // dentro de una clase hay que usar this porque ahora
// // es una propiedad.

// // dentro de la clase podemos crear estados
// class ComponenteNuevo extends React.Component {
//   state = {
//     show: true,
//   };

//   // negamos el estado actual del estado.
//   // inicia en true, y lo negamos a false
//   // cambia a false y lo convertimos en true
//   toogleShow = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     if (this.state.show) {
//       return (
//         <div className="hola_mundo">
//           <h1>Subtitle: {this.props.subtitle}</h1>
//           <button onClick={this.toogleShow}>Cambiar el estado de SHOW</button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>No hay nada para renderizar</h1>
//           <button onClick={this.toogleShow}>Cambiar el estado de SHOW</button>
//         </div>
//       );
//     }
//   }
// }

// // syntaxis como clase
// // para funcionar necesita
// // import React from "react";

// // class App extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>hola mundo </h1>
// //         <Helloworld />
// //         <Helloworld />
// //         <Helloworld />
// //         <Helloworld />
// //         <Helloworld />
// //       </div>
// //     );
// //   }
// // }

// // syntaxis funcion flecha

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>hola mundo </h1>
// //       <Helloworld />
// //       <Helloworld />
// //       <Helloworld />
// //       <Helloworld />
// //       <Helloworld />
// //     </div>
// //   );
// // };

// // funcion normal

// function App() {
//   return (
//     <div>
//       <h1>hola mundo </h1>
//       <Helloworld mytext="HolaMinecraft" subtitle="PRIMER H1" />
//       <Helloworld mytext="este es el segundo texto" subtitle="PRIMER H2" />
//       <Helloworld mytext="funciona?" subtitle="PRIMER H3" />
//       <ComponenteNuevo subtitle="H1 DESDE COMPONENTE NUEVO" />
//       <ComponenteNuevo subtitle="H1 DESDE COMPONENTE NUEVO" />
//       <ComponenteNuevo subtitle="H1 DESDE COMPONENTE NUEVO" />
//     </div>
//   );
// }

class App extends Component {
  state = {
    tareas: tareas,
  };

  render() {
    return (
      <div>
        <Tasks trabajo={this.state.tareas} />
      </div>
    );
  }
}

export default App;
