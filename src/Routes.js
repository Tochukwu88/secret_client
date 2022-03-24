import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";


import App from "./App";
import SingleSecret from "./SingleSecret";













export default function routes() {
    
    return (
      <Router>
        
          
          <Routes>
            
            <Route path="/"  element={<App/> }/>
            
            <Route path="/:hash"  element={<SingleSecret/> }/>
           
            
           
           
            
           
          </Routes>
        
      </Router>
    );
  }
  