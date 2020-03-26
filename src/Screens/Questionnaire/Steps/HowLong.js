import React, { useState } from 'react';
import { Step } from '../Components';

export const HowLong = (props) => {
    const [howLong, setHowLong] = useState(null);

    return (
        <Step showNext={howLong !== null} onNext={(n) => props.onNext(n)} step={props.step}>
            <p>CREATE RADIO BUTTON LIST</p>
        </Step>
    )
}