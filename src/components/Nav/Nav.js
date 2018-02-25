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

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <nav className="mainNav">
        <ul>
          
          <Drawer open={this.state.open}>
            <MenuItem>Feature</MenuItem>
            <MenuItem>Another feature</MenuItem>
            <MenuItem>So many features...</MenuItem>
          </Drawer>
          <li><Link to="/"><RaisedButton label="Profile" /></Link></li>
          <li><Link to="/activities"><RaisedButton label="Activities" /></Link></li>
          <li><Link to="/goals"><RaisedButton label="Goals" /></Link></li>
          <li><RaisedButton
            className="settingsBtn"
            label="Settings"
            onClick={this.handleToggle}
              />
          </li>
        </ul>
      </nav>
    )
  }
}
