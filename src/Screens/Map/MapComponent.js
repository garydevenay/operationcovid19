import React from "react";
import { default_location } from "./constants";
import { GoogleMapComponent } from "./GoogleMapComponent"
import { StatsComponent } from './StatsComponent';

class MapComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      centerPos: default_location
    };
  }

  getCenterLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    }).then(pos => {
      this.setState({
        centerPos: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });
    });
  }

  render() {
    return (
      <>
        <GoogleMapComponent
          mapCenter={this.state.centerPos}
          locationReports={this.props.countrySummary}
          selfReports={this.props.selfReports}
        />
        <StatsComponent data={this.props.data} />
      </>
    );
  }
};

export { MapComponent };
