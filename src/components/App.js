import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log('in App isLoggedIn = ', isLoggedIn)

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route exact path="/about">
          <About isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
