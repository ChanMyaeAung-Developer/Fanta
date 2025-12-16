// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { MouseFollower } from "react-mouse-follower";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <MouseFollower />
//     <App />
//   </StrictMode>,
// )
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { MouseFollower } from "react-mouse-follower";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MouseFollower />
      <App />
    </BrowserRouter>
  </StrictMode>
);
