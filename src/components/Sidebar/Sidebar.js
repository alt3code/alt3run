import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Goal from 'material-ui/svg-icons/action/done';
import Person from 'material-ui/svg-icons/social/person';
import Run from 'material-ui/svg-icons/maps/directions-run';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '0px 52px 16px 0px',
    padding: '25px',
    position: 'fixed',
    height: '100vh'
  }
};

const Sidebar = () => (
  <div className="sidebar">
    <Paper style={style.paper}>
      <Menu selectedMenuItemStyle={{backgroundColor: 'red'}}>
        <MenuItem primaryText="Profile" containerElement={<Link to="/" />} leftIcon={<Person />} />
        <MenuItem primaryText="Activities" containerElement={<Link to="/activities" />} leftIcon={<Run />} />
        <MenuItem primaryText="Goals" containerElement={<Link to="/goals" />} leftIcon={<Goal />} />
        <Divider />
      </Menu>
    </Paper>
  </div>
);

export default Sidebar;
