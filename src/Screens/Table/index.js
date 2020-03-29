import React, { useEffect, useState } from 'react';
import { GetSummary } from '../../API';

export const Table = (props) => {
    const reports = props.selfReports;

    const countReportsForCountry = (country) => {
        if (reports !== null && reports.length > 0) {
            let test = reports.filter(x => x.currentLocation.place.long_name === country);
            return test.length;
        }

        return 0;
    }

    const writeRows = () => {
        if (props.data.length === 0) return null;

        props.data.sort(compare);
        return props.data.filter(c => c.Country !== '').map(x => (
            <tr>
                <td>{x.Country}</td>
                <td>{x.TotalConfirmed}</td>
                <td>{countReportsForCountry(x.Country)}</td>
                <td>{x.TotalRecovered}</td>
                <td>{x.TotalDeaths}</td>
            </tr>
        ))
    }

    const compare = (a, b) => {
        if (a.TotalConfirmed > b.TotalConfirmed) {
            return -1;
        }
        if (a.TotalConfirmed < b.TotalConfirmed) {
            return 1;
        }
        return 0;
    }

    return (
        <div className="padded-body col-12">
            <h2>Worldwide Statistics</h2>

            <div class="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Total Confirmed</th>
                            <th>Self-Reported</th>
                            <th>Total Recovered</th>
                            <th>Total Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        {writeRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}