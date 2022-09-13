import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Contact from "./routes/contact";
import Rent from "./routes/rent";
import Error from "./routes/error";
import About from "./routes/about";
import CarouselTitle from "./components/CarouselTitle";

function App() {
  return (
      <Router>
          <NavBar/>
          <CarouselTitle/>
          <div style={{margin: "50px" }}>
              <Routes>
                  <Route path="/" />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/rent" element={<Rent/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="*" element={<Error/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
