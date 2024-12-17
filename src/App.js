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
import Consultancy from "./components/Consultancy";
import BasketballCamps from "./components/BasketballCamps";
import VideoCast from "./components/VideoCast";
import PlayerList from "./components/PlayerList";
import PointGuards from "./components/PointGuards";
import PlayerProfile from "./components/PlayerProfile";
import BlogHome  from "./components/Blog/BlogHome"
import PostByCategory from "./components/Blog/PostByCategory";
import Article from "./components/Blog/Article";
import PodcastFrontPage from "./components/PodcastFrontPage";



function App() {
  const playerRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const podcastRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <Navbar prop={playerRef} contact={contactRef} about={aboutRef} blog={blogRef} podcast={podcastRef} />
        <Switch>
          <Route exact path="/">
            <Hero />
            <PodcastFrontPage ref={podcastRef} />
            <BlogHome ref={blogRef} />
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
        <Footer prop={playerRef} contact={contactRef} about={aboutRef} />
      </div>
    </Router>
  );
}

export default App;
