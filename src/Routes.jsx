import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Contact from "./Contact";
import Home from './Home';
import Navbar from './Navbar';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' element={Contact}/>
        </Switch>
      </div>     
    </BrowserRouter>
  );
};

export default Routes;