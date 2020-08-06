import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
ReactDOM.render(<Router  basename={process.env.PUBLIC_URL}><App/></Router>,document.getElementById("root"));