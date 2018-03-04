import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import AthleteContainer from '../AthleteContainer/AthleteContainer';
import ActivitiesContainer from '../ActivitiesContainer/ActivitiesContainer';
import GoalsContainer from '../GoalsContainer/GoalsContainer';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="contentContainer">
          <Switch>
            <Route exact path="/" component={AthleteContainer} />
            <Route exact path="/activities" component={ActivitiesContainer} />
            <Route exact path="/goals" component={GoalsContainer} />
          </Switch>
        </div>
      </div>
    )
  }
};
