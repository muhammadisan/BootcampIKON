import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import AppHeader from './AppHeader';

import Home from './pages/Home';
import About from './pages/About';
import Form from './pages/Form';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from './store/todo';

export default function App() {
  return (
    <BrowserRouter>
      <div><AppHeader /></div>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/notfoundroute" element={<About />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
