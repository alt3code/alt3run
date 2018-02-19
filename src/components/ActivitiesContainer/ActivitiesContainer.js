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
    api.fetchStrava(url).then(response => this.setActivities(response));
  }

  setActivities(result) {
    // result.map((res) =>
    //     this.state.activities.push(res)
    // );
    this.setState({
      loading: false,
      activities: result
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
          distance={r.distance}
        />
      );
    });

    return this.state.loading ? <p>Loading...</p> : <div>{activities}</div>
  }
}
