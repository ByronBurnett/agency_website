import React from "react";
import {useRef} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import Inform from "./components/Inform";
import Players from "./components/Players";
import Podcast from "./components/Podcast";
import PlayerProfile from "./components/PlayerProfile";
import StartHere from "./components/StartHere";

function App() {
  const playerRef = useRef(null)
  const contactRef = useRef(null)
  const aboutRef = useRef(null)

  
  
  return (
 <Router> 
<div className="App">
  <Navbar prop={playerRef} contact={contactRef} about={aboutRef} />
  <Switch> 
    <Route exact path="/"> 
  <Hero />
  <About ref={aboutRef} /> 
  <Contact ref={contactRef} /> 
  <Cards ref={playerRef} />
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

 <Route path="/start">
  <StartHere />
 </Route>


 </Switch>
  <Footer />
  </div>
  </Router>

  );
}

export default App;
