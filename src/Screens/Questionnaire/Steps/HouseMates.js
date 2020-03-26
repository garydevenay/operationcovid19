import React, { useState } from 'react';
import { Step } from '../Components';

export const HouseMates = (props) => {
    const [houseMates, setHouseMates] = useState(null);

    return (
        <Step showNext={houseMates !== null} onNext={(n) => props.onNext(n)} step={props.step}>
            <p>WRITE RADIOBUTTON LIST THING STILL</p>
        </Step>
    )
}