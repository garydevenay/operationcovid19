import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";
import { api_url } from "./constants";
import { circle_style, map_style } from "./style";


function rescale(number) {
  let epsilon = 0.01;
  return Math.log(number + epsilon) * 20000;
}


export const GoogleMapComponent = compose(
  withProps({
    googleMapURL: api_url,
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
    defaultOptions={{ 
      styles: map_style, 
      streetViewControl: false, 
      fullscreenControl: false,
      mapTypeControlOptions: { mapTypeIds: [] }
    }}
  >
    {props.locationReports.map(report => (
      <Circle
        center={{
          lat: parseFloat(report.Latitude),
          lng: parseFloat(report.Longitude)
        }}
        radius={ rescale(report.Confirmed) }
        options={ circle_style }
      />
    ))}
  </GoogleMap>
));