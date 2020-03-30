import React from "react";
import { compose, withProps } from "recompose";
import {
	withGoogleMap,
	GoogleMap,
	Circle
} from "react-google-maps";
import { api_url } from "./constants";
import { circle_style, map_style, death_style, recovered_style, self_style } from "./style";
import { uuid } from 'uuidv4';


function rescale(number) {
	let epsilon = 0.01;
	return Math.log(number + epsilon) * 20000;
}

const getSelfReportCircle = (reports) => {
	return reports.map(x => {
		

		return (
			<Circle
				key={uuid()}
				center={{
					lat: parseFloat(x.currentLocation.geometry.lat),
					lng: parseFloat(x.currentLocation.geometry.lng)
				}}
				radius={rescale(5)}
				options={self_style}
			/>
		)
	})
}

const getCircle = (country) => {
	let value = country.Confirmed;
	let style = circle_style;
	if (country.Deaths > value) {
		value = country.Deaths;
		style = death_style;
	}

	if (country.Recovered > value) {
		value = country.Recovered
		style = recovered_style;
	}

	return (
		<Circle
			key={uuid()}
			center={{
				lat: parseFloat(country.Lat),
				lng: parseFloat(country.Lng)
			}}
			radius={rescale(value)}
			options={style}
		/>
	)
}

export const GoogleMapComponent = compose(
	withProps({
		googleMapURL: api_url,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div className="map" style={{ height: `400px` }} />,
		mapElement: <div className="map" style={{ height: `100%` }} />
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
		{props.selfReports !== null && props.selfReports.length > 0 ? getSelfReportCircle(props.selfReports) : null}
		{props.locationReports.length > 0 ? props.locationReports.map(country => getCircle(country)) : null}
	</GoogleMap>
));