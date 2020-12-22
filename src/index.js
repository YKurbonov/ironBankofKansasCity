import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StaProvider} from "./StProvider";
import red, {iniState} from "./reducer";

ReactDOM.render(
  <React.Fragment>
    <StaProvider initialState={iniState} reducer={red}>
      <App />
    </StaProvider>
  </React.Fragment>
, document.getElementById("root"));