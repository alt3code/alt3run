import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

// Activities custom loader
export default class LoaderExampleText extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Dimmer active>
            <Loader size='mini'>Loading</Loader>
          </Dimmer>
        </Segment>
      </div>
    )
  }
}
