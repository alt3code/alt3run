import { ACTIVITIES_URL, TOKEN_STR, ACCESS_TOKEN } from '../../config/config';

import React, { Component } from 'react';
import Activity from '../Activity/Activity';
const api = require('../../utils/Api');
const axios = require('axios');

export default class ActivitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activities: []
    };
  }

  getActivities(url) {
    var actPromises = [];
    var self = this;
    // Get all activities for authenticated athlete
    api.fetchStrava(url)
      .then((response) => {
        // Push promise into array for further processing
        response.forEach(el => {
          actPromises.push(axios.get(`${ACTIVITIES_URL}/${el.id}?${TOKEN_STR}${ACCESS_TOKEN}`));
        });
      })
      // Process all promises in array, retrieve detailed activity info
      .then((response) => {
        axios.all(actPromises).then(function(results) {
            var activities = [];
            results.forEach(function(response) {
                activities.push(response.data);
            })
            self.setState({activities: activities, loading: false});
        });
      });
  }

  componentDidMount() {
    this.getActivities(`${ACTIVITIES_URL}?${TOKEN_STR}${ACCESS_TOKEN}`);
  }

  render() {
    var activities = this.state.activities.map((r, i) => {
      console.log(r);
      return (
        <Activity
          key={i}
          id={r.id}
          name={r.name}
          distance={r.distance}
          totalTime={r.elapsed_time}
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
