import React, { useEffect, useState } from 'react';
import { GetSummary, GetSelfReports, GetCountrySummary } from '../../API';
import { MapComponent } from './MapComponent';
import { Table } from '../Table';

export const Map = () => {
	const [data, setData] = useState([]);
	const [selfReports, setSelfReports] = useState(null);
	const [countryState, setCountryState] = useState([]);

	useEffect(() => {
		GetSelfReports().then(function(d) {
			setSelfReports(d)
		});

		GetSummary().then(function (d) {
            setData(d.Countries);
		});

		GetCountrySummary().then(function(d) {
			setCountryState(d);
		});
	}, []);

    return (
		<div class="page-body">
    		<MapComponent data={data} selfReports={selfReports} countrySummary={countryState} />
			<Table data={data} selfReports={selfReports} />
		</div>
	)
}