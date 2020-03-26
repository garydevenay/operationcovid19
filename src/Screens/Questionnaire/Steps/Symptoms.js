import React, { useState } from 'react';
import { Step, CheckboxList } from '../Components';

const potentialSymptoms = require('../symptoms.json');

export const Symptoms = (props) => {
    const [ symptoms, setSymptoms ] = useState([]);

    return (
        <Step showNext={symptoms.length > 0} onNext={(n) => props.onNext(n)} step={props.step}>
            <CheckboxList options={potentialSymptoms} value={symptoms} setValue={(x) => setSymptoms(x)} question="Do you have any of the following symptoms?" />
        </Step>
    )
}