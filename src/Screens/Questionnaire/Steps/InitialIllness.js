import React, { useState } from 'react';
import { Step, DatePicker } from '../Components';

export const InitialIllness = (props) => {
    const [illnessDate, setIllnessDate] = useState(null);

    return (
        <Step showNext={illnessDate !== null} onNext={(n) => props.onNext(n)} step={props.step}>
            <DatePicker value={illnessDate} setValue={setIllnessDate} question="When did you start to feel ill?" />
        </Step>
    )
}