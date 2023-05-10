import React from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import Hero from "./Hero";
import Events from "./Events";
import Lessons from "./Lessons";
import Contact from "./Contact";

const App = () => {
  return (

    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route className="navbar-links" path="/" element={<Hero />} />
          <Route className="navbar-links" path="/lessons" element={<Lessons />} />
          <Route className="navbar-links" path="/events" element={<Events />} />
          <Route className="navbar-links" path="/lessons" element={<Lessons />} />
          <Route className="navbar-links" path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
    
  );
};

export default App