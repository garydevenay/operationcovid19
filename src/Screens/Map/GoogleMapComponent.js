import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";

import { map_style } from "./style";


function rescale(number) {
  let epsilon = 0.01;
  return Math.log(number + epsilon) * 20000;
}


export const GoogleMapComponent = compose(
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
    defaultOptions={{ styles: map_style }}
  >
    {props.locationReports.map(report => (
      <Circle
        center={{
          lat: parseFloat(report.Latitude),
          lng: parseFloat(report.Longitude)
        }}
        radius={ rescale(report.Confirmed) }
        options={{ strokeWeight: 0, fillColor: "#FF0000", fillOpacity: 0.3 }}
      />
    ))}
  </GoogleMap>
));