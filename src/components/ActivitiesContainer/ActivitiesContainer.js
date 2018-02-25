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

  getActivities(url) {
    var authActivities = [];
    api.fetchStrava(url).then(response => {
      // Get all the activites - get the ID's, request polyline
      response.map(activity => {
        var activityId = activity.id;
        var activityUrl = `${ACTIVITIES_URL}/${activityId}?${TOKEN_STR}${ACCESS_TOKEN}`;
        api.fetchStrava(activityUrl)
          .then(response => {
            authActivities.push(response);
            console.log("activities = " + authActivities + " loading = " + this.state.loading);
            this.setState({activities: authActivities, loading: false});
        });
      });
    });
  }

  componentWillMount() {
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
          maxSpeed={r.max_speed}
          avgSpeed={r.average_speed}
          description={r.description}
          type={r.type}
          date={r.start_date}
          polyline={r.map.polyline}
        />
      );
    });

    return this.state.loading ? <p>Loading...</p> : <div>{activities}</div>
  }
}
