import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import About from "./components/About";
import Inform from "./components/Inform";
import Players from "./components/Players";
import Podcast from "./components/Podcast";
import PlayerProfile from "./components/PlayerProfile";

function App() {
  return (
 <Router> 
<div className="App">
  <Navbar />
  <Switch> 
    <Route exact path="/"> 
  <Hero />
  <Analytics /> 
  <Contact /> 
  <Cards />
  </Route>

<Route path="/about">
<About/>
 </Route>
 <Route path="/contact">
<Inform />
 </Route>

 <Route path="/players">
  <Players />
 </Route>

 <Route path="/podcast">
  <Podcast />
 </Route>

 <Route path="/playerprofile">
  <PlayerProfile />
 </Route>


 </Switch>
  <Footer />
  </div>
  </Router>

  );
}

export default App;
