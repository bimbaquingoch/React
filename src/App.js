import React from "react";
import "./App.css";

function Helloworld() {
  return (
    <div className="hola_mundo">
      <h2>vengo de la funcion Helloworld</h2>
    </div>
  );
}

// syntaxis como clase
// para funcionar necesita
// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>hola mundo </h1>
//         <Helloworld />
//         <Helloworld />
//         <Helloworld />
//         <Helloworld />
//         <Helloworld />
//       </div>
//     );
//   }
// }

// syntaxis funcion flecha

// const App = () => {
//   return (
//     <div>
//       <h1>hola mundo </h1>
//       <Helloworld />
//       <Helloworld />
//       <Helloworld />
//       <Helloworld />
//       <Helloworld />
//     </div>
//   );
// };

// funcion normal

function App() {
  return (
    <div>
      <h1>hola mundo </h1>
      <Helloworld />
      <Helloworld />
      <Helloworld />
      <Helloworld />
      <Helloworld />
    </div>
  );
}

export default App;
