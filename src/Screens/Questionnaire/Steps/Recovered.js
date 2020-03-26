import React, { useState } from 'react';
import { Step, Boolean } from '../Components';

export const Recovered = (props) => {
    const [recovered, setRecovered] = useState(null);

    return (
        <Step showNext={recovered !== null} onNext={(n) => props.onNext(n)} step={props.step}>
            <Boolean value={recovered} setValue={setRecovered} question="Do you believe you have recovered?" />
        </Step>
    )
}