import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "./Header";
import HeroSection from './HeroSection';
import AboutMe from "./AboutMe";
import { Route, Switch } from "react-router-dom";
import Error from "./Error";
import Under from "./Under";
 

const App = () => {
  return(
    <>
    <Header />
      <Switch>
        <Route exact path="/" component={HeroSection} />
        <Route exact path="/about_me" component={AboutMe} />
        <Route path="/under_contruction" component={Under}/>
        <Route component={Error} />
        
      </Switch>
    </>
  );
};

export default App;
