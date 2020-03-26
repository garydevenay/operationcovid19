import React, { useState } from 'react';
import { Step, LocationAutocomplete } from '../Components';

export const Location = (props) => {
    const [location, setLocation] = useState(null);

    return (
        <Step showNext={location !== null} step={props.step} onNext={(n) => props.onNext(n)}>
            <LocationAutocomplete value={location} setValue={setLocation} question="Where are you located?" />
        </Step>
    )
}