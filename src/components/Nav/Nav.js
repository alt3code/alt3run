import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div className="mainNav">
        <ul>
          <li><Link to="/"><RaisedButton label="Profile" /></Link></li>
          <li><Link to="/activities"><RaisedButton label="Activities" /></Link></li>
          <li><Link to="/goals"><RaisedButton label="Goals" /></Link></li>
        </ul>
      </div>
    )
  }
}
