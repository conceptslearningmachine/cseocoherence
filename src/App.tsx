import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Updates from './components/Updates';
import Resources from './components/Resources';
import Overview from './components/Overview';
import DeveloperGetStarted from './components/DeveloperGetStarted';
import DesignGetStarted from './components/DesignGetStarted';
import Color from './components/Color';
import Grid from './components/Grid';
import Iconography from './components/Iconography';
import Typography from './components/Typography';
import Card from './components/Card'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Navbar from './Navbar'
import styles from "./styles";


const App = () => (
  <BrowserRouter>
    <div className="app">
      <style>{styles}</style>
      <Navbar />
       <Home/> 
      <Switch>
        {/* Defaut route */}
        <Route path="/" component={Home} exact={true} />
        {/* General / Informational pages */}
        <Route path="/overview" component={Overview} />
        <Route path="/updates" component={Updates} />
        <Route path="/resources" component={Resources} />
        {/* Get Started */}
        <Route path="/DesignGetStarted" component={DesignGetStarted} />
        <Route path="/DeveloperGetStarted" component={DeveloperGetStarted} />
        {/* Styles */}
        <Route path="/styles/color" component={Color} />
        <Route path="/styles/grid" component={Grid} />
        <Route path="/styles/iconography" component={Iconography} />
        <Route path="/styles/typography" component={Typography} />
        {/* Patterns */}
        <Route path="/patterns/card" component={Card} />
        <Route path="/patterns/header" component={Header} />
        <Route path="/patterns/navigation" component={Navigation} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;