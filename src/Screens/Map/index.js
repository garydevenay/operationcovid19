import React, { useEffect, useState } from 'react';
import { GetSummary } from '../../API';
import { MapComponent } from './MapComponent';
import { Table } from '../Table';

export const Map = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		GetSummary().then(function (d) {
            setData(d.Countries);
        })
	}, []);

    return (
		<div class="page-body">
    		<MapComponent data={data} />
			<Table data={data} />
		</div>
	)
}