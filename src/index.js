import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";
import { AppProvider } from "./context&reducer/context";
import "./styles/index.css";

const root = document.getElementById("root");

ReactDOMClient.createRoot(root).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);
