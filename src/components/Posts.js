import React, { Component } from "react";

export class Posts extends Component {
  state = {
    posts: [],
  };
  // se ejecuta cuando el componente ha sido cargado en pantalla
  async componentDidMount() {
    // no instale nada para hacer la peticion HTTP
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await respuesta.json();
    this.setState({ posts: data });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((posts) => {
          return (
            <div key={posts.id}>
              <h1>{posts.title}</h1>
              <p>{posts.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
