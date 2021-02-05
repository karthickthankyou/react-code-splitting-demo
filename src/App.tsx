import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
