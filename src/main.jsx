import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/Normalize/CSSReset.css";
import "./assets/Normalize/Normalizer.css";
import "antd/dist/antd.css";
import "./assets/Styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
