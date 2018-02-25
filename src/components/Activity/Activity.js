import React, { Component } from 'react';
import './Activity.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Card from 'material-ui/Card';
import { MAPBOX_ACCESS_TOKEN } from '../../config/config';
import runLogo from '../../Static/Run.gif';
import rideLogo from '../../Static/Ride.png';

const Map = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN
});

var polyline = require('@mapbox/polyline');
var getBounds = require('bound-points')

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {coords:[]};
  }
  reverse(array) {
    var i = 0,
        n = array.length,
        middle = Math.floor(n / 2),
        temp = null;

    for (; i < middle; i += 1) {
       temp = array[i];
       array[i] = array[n - 1 - i];
       array[n - 1 - i] = temp;
    }
    return array;
  }

  componentWillMount() {
    var decodedArray = polyline.decode(this.props.polyline);
    var coordsArray = [];
    decodedArray.forEach((array) => {
      coordsArray.push(this.reverse(array));
    });
    var boundsPair = getBounds(coordsArray);
    this.setState({coords: coordsArray, bounds: boundsPair});
  }

  render() {
    return (
      <Card style={{ margin: 50, padding: 55 }}>
        <div className="Activity">
          <h3 className="title">{this.props.name}</h3>
          <p className="activityType">Type:
            <span><img src={runLogo} style={{width: 40, position: 'relative', top: 15, left: 10}} alt='Run'/></span>
          </p>
          <p className="totalDistance">Total Distance: {this.props.distance}m  ({(this.props.distance/1000).toFixed(2)}km)</p>
          <div className="mapContainer">
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              zoom={[12]}
              fitBounds={this.state.bounds}
              containerStyle={{
                height: 450
              }}>
              <Layer
                type="line"
                id="markerLine"
                paint={{
                  'line-color':'blue',
                  'line-width': 4,
                }}>
                <Feature coordinates={this.state.coords}/>
              </Layer>
            </Map>
          </div>
          <div className="infoContainer">
            <p className="infoText">Information</p>
            <p className="maxSpeed">Maximum Speed: <strong>{this.props.maxSpeed}m/s</strong></p>
            <p className="avgSpeed">Average Speed: <strong>{this.props.avgSpeed}m/s</strong></p>
            <p className="descText">Description: <strong>{this.props.description ? this.props.description : '-'}</strong></p>
          </div>
        </div>
      </Card>
    )
  }
}
