import { ACTIVITIES_URL, TOKEN_STR, ACCESS_TOKEN } from '../../config/config';

import React, { Component } from 'react';
import Activity from '../Activity/Activity';
const api = require('../../utils/Api');

export default class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activities: []
    };
  }

  // getActivities(url) {
  //   api.fetchStrava(url).then(response => this.setActivities(response));
  // }
  //
  // setActivities(result) {
  //   // result.map((res) =>
  //   //     this.state.activities.push(res)
  //   // );
  //   this.setState({
  //     loading: false,
  //     activities: result
  //   });
  // }
  //
  // componentWillMount() {
  //   this.getActivities(`${ACTIVITIES_URL}?${TOKEN_STR}${ACCESS_TOKEN}`);
  // }

  getActivities(url) {
    api.fetchStrava(url).then(response => this.setActivities(response));
  }

  setActivities(allActivities) {
    var authActivities = [];
    // Get all the activites - get the ID's, request polyline
    for (var i = 0; i < allActivities.length; i++) {
        var activityId = allActivities[i].id;
        var activityUrl = `${ACTIVITIES_URL}/${activityId}?${TOKEN_STR}${ACCESS_TOKEN}`;
        api.fetchStrava(activityUrl).then(response => authActivities.push(response));
        console.log(authActivities[i]);
    }
    this.setState({
      loading: false,
      activities: authActivities
    });
  }

  componentDidMount() {
    this.getActivities(`${ACTIVITIES_URL}?${TOKEN_STR}${ACCESS_TOKEN}`);
  }

  render() {
    var activities = this.state.activities.map((r, i) => {
      return (
        <Activity
          key={i}
          id={r.id}
          name={r.name}
          distance={r.distance}
          polyline={r.map.polyline}
        />
      );
    });

    return this.state.loading ? <p>Loading...</p> : <div>{activities}</div>
  }
}
