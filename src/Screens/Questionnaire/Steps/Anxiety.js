import React, { useState } from 'react';
import { Step, Range } from '../Components';

export const Anxiety = (props) => {
    const [anxietyLevel, setAnxietyLevel ] = useState(0);

    return (
        <Step showNext={true} onNext={(n) => props.onNext(n)} step={props.step}>
            <Range value={anxietyLevel} setValue={setAnxietyLevel} max={10} minLabel="Completely Calm" maxLabel="Extremely Anxious" question="How anxious were you, or are you?" />
        </Step>
    )
}