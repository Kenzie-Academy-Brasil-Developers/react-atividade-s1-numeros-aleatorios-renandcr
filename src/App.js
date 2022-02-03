import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  function randomNumber() {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{number}</h1>
        <button className="button-trasition" onClick={randomNumber}>
          Criar novo número
        </button>
      </header>
    </div>
  );
}

export default App;
