import React from "react";
import { compose, withProps } from "recompose";
import {
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";
import { api_url } from "./constants";
import { circle_style, map_style, death_style, recovered_style } from "./style";
import { uuid } from 'uuidv4';


function rescale(number) {
  return number * 10;
  let epsilon = 0.01;
  return Math.log(number + epsilon) * 20000;
}


export const GoogleMapComponent = compose(
  withProps({
    googleMapURL: api_url,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, borderTopLeftRadius: 18, borderTopRightRadius: 18, backgroundColor: '#144673' }} />,
    mapElement: <div style={{ height: `100%`, borderTopLeftRadius: 18, borderTopRightRadius: 18 }} />
  }),
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
      <>
      <Circle
        key={uuid()}
        center={{
          lat: parseFloat(report.Lat),
          lng: parseFloat(report.Long_)
        }}
        radius={ rescale(report.Confirmed) }
        options={ circle_style }
      />
      <Circle
        key={uuid() + 'recovered'}
        center={{
          lat: parseFloat(report.Lat),
          lng: parseFloat(report.Long_)
        }}
        radius={ rescale(report.Recovered) }
        options={ recovered_style }
      />
      <Circle
        key={uuid() + 'death'}
        center={{
          lat: parseFloat(report.Lat),
          lng: parseFloat(report.Long_)
        }}
        radius={ rescale(report.Deaths) }
        options={ death_style }
      />
      </>
    ))}
  </GoogleMap>
));