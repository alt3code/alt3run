import { DEFAULT_URL, TOKEN_STR, ACCESS_TOKEN, USER_ID } from '../../config/config';

import React, { Component } from 'react';
import Athlete from '../Athlete/Athlete';
const api = require('../../utils/Api');

export default class AthleteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      profile: '',
      firstname: '',
      lastname: '',
    };
  }

  getAthlete(url) {
    api.fetchStrava(url).then(response => this.setAthlete(response));
  }

  setAthlete(result) {
    this.setState({
      loading: false,
      profile: result.profile,
      firstname: result.firstname,
      lastname: result.lastname,
    });
  }

  componentWillMount() {
    this.getAthlete(`${DEFAULT_URL}${USER_ID}?${TOKEN_STR}${ACCESS_TOKEN}`);
  }

  render() {
    return this.state.loading ? <p>Loading...</p> :
    <Athlete
      profile={this.state.profile}
      firstname={this.state.firstname}
      lastname={this.state.lastname}
    />;
  }
}
