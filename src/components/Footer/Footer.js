import React, { Component } from 'react';
import './Footer.css';

const creator = 'alt3code';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          {creator}
        </p>
      </footer>
    )
  }
}
