import React, { Component } from 'react';
import './Athlete.css';

export default class Athlete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Athlete">
        <p>Name: {this.props.firstname} {this.props.lastname}</p>
        <img
          src={this.props.profile}
          alt={this.props.firstname + ' ' + this.props.lastname + ' Profile Pic'}
          title={this.props.firstname + ' ' + this.props.lastname + ' Profile Pic'}
        />
      </div>
    )
  }
}
