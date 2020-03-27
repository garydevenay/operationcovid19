import React, { useState, useContext, useEffect } from 'react';
import { Step, LocationAutocomplete } from '../Components';
import { store } from '../store';

export const Location = (props) => {
    const [location, setLocation] = useState(null);
    const { dispatch } = useContext(store);

    useEffect(() => {
        dispatch({ type: 'CURRENT_LOCATION', payload: location });
    }, [location])

    return (
        <Step showNext={location !== null} step={props.step} onNext={(n) => props.onNext(n)}>
            <LocationAutocomplete value={location} setValue={setLocation} question="Where are you located?" />
        </Step>
    )
}