import React, { Component } from "react";
import "./App.css";
// Components
import Form from './Form';
import Village from "./Village";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{height: '10vh'}}>
          <Form />
        </div>
        <div style={{height: '90vh'}}>
          <Village />
        </div>
      </div>
    );
  }
}

export default App;
