import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import Nav from '../Nav/Nav';
import AthleteContainer from '../AthleteContainer/AthleteContainer';
import ActivitiesContainer from '../ActivitiesContainer/ActivitiesContainer';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <Nav />
        </div>
        <div className="contentContainer">
          <Switch>
            <Route exact path="/" component={AthleteContainer} />
            <Route exact path="/activities" component={ActivitiesContainer} />
          </Switch>
        </div>
        
      </div>
    )
  }
};
