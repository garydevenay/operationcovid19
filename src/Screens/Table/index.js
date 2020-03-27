import React, { useEffect, useState } from 'react';
import { GetSummary } from '../../API';

export const Table = (props) => {
    const writeRows = () => {
        if (props.data.length == 0) return null;

        props.data.sort(compare);
        return props.data.filter(c => c.Country !== '').map(x => (
            <tr>
                <td>{x.Country}</td>
                <td>{x.TotalConfirmed}</td>
                <td></td>
                <td className="d-none d-md-block">{x.TotalRecovered}</td>
                <td className="d-none d-md-block">{x.TotalDeaths}</td>
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

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Total Confirmed</th>
                        <th>Self-Reported</th>
                        <th className="d-none d-md-block">Total Recovered</th>
                        <th className="d-none d-md-block">Total Deceased</th>
                    </tr>
                </thead>
                <tbody>
                    {writeRows()}
                </tbody>
            </table>
        </div>
    )
}