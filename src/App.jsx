import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Events from "./Events";
import Lessons from "./Lessons";
import Contact from "./Contact";


const App = () => {
  return (
    // <>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/events">
    //       <h1>Events Page</h1>
    //     </Route>
    //     <Route path="/lessons">
    //       <h1>Lessons Page</h1>
    //     </Route>
    //     <Route path="/contact">
    //       <h1>Contact Page</h1>
    //     </Route>
    //     <Route path="/">
    //       {/* <Hero /> */}
    //     </Route>
    //   </Routes>
    // </>

    <>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path = "/" />
          <Route path="/events" component={<Events />}/>
        </Routes>
      </div>
    </BrowserRouter>
    <Hero />
    </>
    
    
  );
};

export default App;
