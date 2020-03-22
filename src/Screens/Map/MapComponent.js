import React from "react";
import Papa from "papaparse";

import { data_source } from "./data";
import { GoogleMapComponent } from "./GoogleMapComponent"


class MapComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      locationReports: [],
      centerPos: {
        // Default to return UK
        lat: 55.3781,
        lng: -3.436
      }
    };
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getCsvData();
    this.getCenterLocation();
  }

  getData(result) {
    this.setState({ locationReports: result.data });
  }

  fetchCsv() {
    return fetch(data_source).then(res => {
      let reader = res.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(result => {
        return decoder.decode(result.value);
      });
    });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();
    Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: this.getData
    });
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
      <GoogleMapComponent
        mapCenter={this.state.centerPos}
        locationReports={this.state.locationReports}
      />
    );
  }
};

export { MapComponent };
