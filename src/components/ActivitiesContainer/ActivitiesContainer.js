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
    api.fetchStrava(url)
      .then((response) => {
        response.forEach(el => {
          actPromises.push(axios.get(`${ACTIVITIES_URL}/${el.id}?${TOKEN_STR}${ACCESS_TOKEN}`));
        });
      })
      .then((response) => {
        axios.all(actPromises).then(function(results) {
            var activities = [];
            results.forEach(function(response) {
                console.log(response.data);
                activities.push(response.data);
            })
            console.log(activities);
            self.setState({activities: activities, loading: false});
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
