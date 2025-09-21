import React from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Podcast from "./components/Podcast"
import Hero from "./components/Hero";
import Teams from "./components/Teams"
import About from "./components/About";
import Footer from "./components/Footer";
import Inform from "./components/Inform";
import Cards from "./components/Cards"
import Advanced from "./components/Advanced";
import Scout from "./components/Scout";
import PlayerDevelopment from "./components/PlayerDevelopment";
import Consultancy from "./components/Consultancy";
import BasketballCamps from "./components/BasketballCamps";
import VideoCast from "./components/VideoCast";
import PlayerList from "./components/PlayerList";
import PointGuards from "./components/PointGuards";
import PlayerProfile from "./components/PlayerProfile";
import BlogHome  from "./components/Blog/BlogHome"
import PostByCategory from "./components/Blog/PostByCategory";
import Article from "./components/Blog/Article";
import Newsletter from "./components/Newsletter";


function App() {
  
  const contactRef = useRef(null);
  
  const blogRef = useRef(null);
  
  return (
    <Router>
      <div className="App">
        <Navbar  contact={contactRef} blog={blogRef} />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Newsletter /> 
            <BlogHome ref={blogRef} />
            <Podcast />
           
           
          </Route>
          <Route path="/contact">
            <Inform />
          </Route>
          <Route path="/scouting">
            <Scout />
          </Route>

          <Route path="/playerdevelopment">
            <PlayerDevelopment />
          </Route>
        

          <Route path="/advancedstats">
            <Advanced />
          </Route>

          <Route path="/consultancy">
            <Consultancy />
          </Route>

          <Route path="/camps">
            <BasketballCamps />
          </Route>

          <Route path="/videocast">
            <VideoCast />
          </Route>

          <Route path="/playerlist">
            <PlayerList />
          </Route>

          <Route path="/pointguards">
            <PointGuards />
          </Route>

          <Route path="/player/:player_id">
           <PlayerProfile />
          </Route>

          <Route path="/about">
          <About />
          </Route>


          <Route path="/blog">
          <BlogHome />
          </Route>

          

          <Route path="/posts/:slug">
         <PostByCategory />
          </Route>

          <Route path="/article/:slug">
         <Article />
          </Route>


        </Switch>
        <Footer  contact={contactRef}  />
      </div>
    </Router>
  );
}
  



export default App;
