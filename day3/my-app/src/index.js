import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Form from "./pages/Form";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
