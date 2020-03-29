import React, { useEffect, useState } from 'react';
import { GetSummary, GetSelfReports } from '../../API';
import { MapComponent } from './MapComponent';
import { Table } from '../Table';

export const Map = () => {
	const [data, setData] = useState([]);
	const [selfReports, setSelfReports] = useState(null);

	useEffect(() => {
		GetSelfReports().then(function(d) {
			setSelfReports(d)
		});

		GetSummary().then(function (d) {
            setData(d.Countries);
		});
	}, []);

    return (
		<div class="page-body">
    		<MapComponent data={data} selfReports={selfReports} />
				<Table data={data} selfReports={selfReports} />
		</div>
	)
}