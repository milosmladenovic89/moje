import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas, fab)

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<BrowserRouter> <App /> </BrowserRouter>)