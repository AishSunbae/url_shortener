import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEZon4y0uCOIsCpQsW80gbApZyB39wJQ",
  authDomain: "url-shortner-1c4e1.firebaseapp.com",
  projectId: "url-shortner-1c4e1",
  storageBucket: "url-shortner-1c4e1.appspot.com",
  messagingSenderId: "872898950842",
  appId: "1:872898950842:web:1af065f58443a43b64b483",
  measurementId: "G-DW5DDEKHHB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Render React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
