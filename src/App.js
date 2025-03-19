import React from "react";
import ApiGateway from "./components/ApiGateway/ApiGateway";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I NOSTRI SERVIZI</h1>
        <ApiGateway />
      </header>
    </div>
  );
}

export default App;
