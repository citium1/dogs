import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Pages/Layout";
import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import DogsPage from "./Components/Pages/DogsPage";
import PuppuyPage from "./Components/Pages/PuppyPage";
import BloggPage from "./Components/Pages/BloggPage";

import './index.css';


export default function App() {
  return (
    <div className="container">
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="om" element={<AboutPage />} />
          <Route path="hundar" element={<DogsPage />} />
          <Route path="valpar" element={<PuppuyPage />} />
          <Route path="blogg" element={<BloggPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
