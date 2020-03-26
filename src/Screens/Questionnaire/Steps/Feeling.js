import React, { useState } from 'react';
import { Step, Range } from '../Components';

export const Feeling = (props) => {
    const [feelingRange, setFeelingRange] = useState(0);

    return (
        <Step showNext={true} onNext={(n) => props.onNext(n)} step={props.step}>
            <Range value={feelingRange} setValue={setFeelingRange} max={10} minLabel="Unnoticeable" maxLabel="Worst Feeling Ever" question="How bad did you, or do you, feel?" />
        </Step>
    )
}