import React, { useState } from 'react';
import { Step, DatePicker } from '../Components';

export const When = (props) => {
    const [when, setWhen] = useState(null);

    return (
        <Step onNext={(n) => props.onNext(n)} showNext={when !== null} step={props.step}>
            <DatePicker value={when} setValue={setWhen} question="When do you think you may have first caught Covid-19?" />
        </Step>
    )
}