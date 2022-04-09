import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
  <StrictMode>
    <App />
  </StrictMode>
  </Router>,
  rootElement
);
