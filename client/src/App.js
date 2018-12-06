import React from 'react';
import './App.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Nav />
      <img src="./TIN-332 Books from_large.jpg" alt="book banner"/>
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
      <Footer />
    </div>
  </Router>
);
export default App;
