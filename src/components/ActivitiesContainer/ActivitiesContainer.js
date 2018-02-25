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
      for (var i = 0; i < response.length; i++) {
          var activityId = response[i].id;
          var activityUrl = `${ACTIVITIES_URL}/${activityId}?${TOKEN_STR}${ACCESS_TOKEN}`;
          api.fetchStrava(activityUrl)
            .then(response => {
              authActivities.push(response);
              console.log("response = " + response.id);
              this.setState({activities: authActivities});
          });
      }
    });
  }

  componentWillMount() {
    this.getActivities(`${ACTIVITIES_URL}?${TOKEN_STR}${ACCESS_TOKEN}`);
    this.setState({
      loading: false
    });
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
          polyline={r.map.polyline}
        />
      );
    });

    return this.state.loading ? <p>Loading...</p> : <div>{activities}</div>
  }
}
