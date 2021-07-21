import React from "react";
import{
  BrowserRouter as Router,Route,Redirect,Switch
}from "react-router-dom";

import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';


const App = () => {
  return (
    <Router>
    <Navbar />
      <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>

        <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
