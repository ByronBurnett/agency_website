import React from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Inform from "./components/Inform";
import Podcast from "./components/Podcast";
import StartHere from "./components/StartHere";
import Advanced from "./components/Advanced";
import Scout from "./components/Scout";
import PlayerDevelopment from "./components/PlayerDevelopment";

function App() {
  const playerRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

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


          <Route path="/podcast">
            <Podcast />
          </Route>

          <Route path="/scouting">
            <Scout />
          </Route>

          <Route path="/playerdevelopment">
            <PlayerDevelopment />
          </Route>
        

          <Route path="/start">
            <StartHere />
          </Route>

          <Route path="/advancedstats">
            <Advanced />
          </Route>


        </Switch>
        <Footer prop={playerRef} contact={contactRef} about={aboutRef} />
      </div>
    </Router>
  );
}

export default App;
