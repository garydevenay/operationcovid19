import React from "react";
import ReactDOM from "react-dom";
import Papa from "papaparse";
import { compose, withProps } from "recompose";
import { geolocated } from "react-geolocated";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";

var DARKMODE = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1a3646"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#64779e"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878"
      }
    ]
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#334e87"
      }
    ]
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#023e58"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#283d6a"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6f9ba5"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#023e58"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3C7680"
      }
    ]
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#304a7d"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#2c6675"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#255763"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#b0d5ce"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#023e58"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#283d6a"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#3a4762"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#0e1626"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70"
      }
    ]
  }
];

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA9OllsNngBJVQYrL3d1bZuciubg7l0WhE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: props.mapCenter.lat, lng: props.mapCenter.lng }}
    defaultOptions={{ styles: DARKMODE }}
  >
    {props.locationReports.map(report => (
      <Circle
        center={{
          lat: parseFloat(report.Latitude),
          lng: parseFloat(report.Longitude)
        }}
        radius={parseFloat(Math.log(report.Confirmed + 1) * 20000)}
        options={{ strokeWeight: 0, fillColor: "#FF0000", fillOpacity: 0.3 }}
      />
    ))}
  </GoogleMap>
));

class DemoApp extends React.PureComponent {
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
    const url = [
      // Length issue
      `https://raw.githubusercontent.com/CSSEGISandData`,
      `/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-17-2020.csv`
    ].join("");

    return fetch(url).then(res => {
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
      <MyMapComponent
        mapCenter={this.state.centerPos}
        locationReports={this.state.locationReports}
      />
    );
  }
}

ReactDOM.render(<DemoApp />, document.getElementById("root"));
