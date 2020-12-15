import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import HeadsetsSection from "./Components/HeadsetsSection";
import HomePage from "./Components/HomePage";
import Mobilesection from "./Components/Mobilesection";
import Navbar from "./Components/Navbar";
import Sale from "./Components/Sale";
import Services from "./Components/Services";
import SpeakerSection from "./Components/SpeakerSection";
import WatchSection from "./Components/WatchSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HomePage />
          </Route>
          <Route exact path="/services">
            <Navbar />
            <Services />
          </Route>
          <Route exact path="/sale">
            <Navbar />
            <Sale />
          </Route>
          <Route exact path="/About-Us">
            <Navbar />
            <AboutUs />
          </Route>
          <Route path="/mobile">
            <Navbar />
            <Mobilesection />
          </Route>
          <Route path="/headset">
            <Navbar />
            <HeadsetsSection />
          </Route>
          <Route path="/watch">
            <Navbar />
            <WatchSection />
          </Route>
          <Route path="/speaker">
            <Navbar />
            <SpeakerSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
