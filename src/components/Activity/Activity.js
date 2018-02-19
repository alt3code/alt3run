import React, { Component } from 'react';
import './Activity.css';

import Card from 'material-ui/Card';

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card style={{ margin: 50, padding: 55 }}>
        <div className="Activity">
          <h3 className="title">Activity</h3>
          <p className="id">ID: {this.props.id}</p>
          <p className="totalDistance">Total Distance: {this.props.distance}m  ({(this.props.distance/1000).toFixed(2)}km)</p>
        </div>
      </Card>
    )
  }
}
