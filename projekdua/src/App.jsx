import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Allcountries from "./components/Allcountries";
import Countryinfo from "./components/Countryinfo";
import About from './components/about';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="header">
        <div className="container" id="atas">
        <h5>Neworld</h5>
          <ul>
            <li>
            <Link to="/about" >About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Allcountries />} />
          <Route path="/country/:countryName" element={<Countryinfo />} />
          <Route path="/about" element = {<About/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
