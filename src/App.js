import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Link } from "react-router-dom";

import { Context } from "./Tetst/Context";
import Second from "./components/second";
import Arrival from "./components/Arrival";

function App() {
  return <BrowserRouter children={<Context></Context>}></BrowserRouter>;
}

export default App;

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
