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
      <img src="C:\Users\chase\Documents\codingBootcamp\homeworks\NYT-Google-Book-Search\client\src\TIN-332 Books from_large.jpg" alt="book banner"></img> 
      <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj0-r_cgIrfAhUo9IMKHQNBCOoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thebanner.org%2Ftuned-in%2F2016%2F03%2Fbooks-from-the-banner-desk&psig=AOvVaw19As8xSLga-Ih-6EBotZfE&ust=1544144510124151" alt="book banner"></img>
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
      <Footer />
    </div>
  </Router>
);
export default App;
