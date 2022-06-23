import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import {  ComicsProvider } from "./contexts/ComicsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> 
        <ComicsProvider>
          <App />
        </ComicsProvider>       
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
