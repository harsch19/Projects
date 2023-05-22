import React from 'react';
import './App.css';
import Header from "./components/header";
import Nav from "./components/navbar";
import Footer from './components/footer';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<h1>About</h1>} />
          <Route path="/Menu" element={<h1>Menu</h1>} />
          <Route path="/contact" element={<h1>Contact Us</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
