import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { GameContextWrapper } from "./context";


ReactDOM.render(
    <React.StrictMode>
      <GameContextWrapper> 
             <App />
             </GameContextWrapper>
    </React.StrictMode>
  ,
  document.getElementById("root")
);
