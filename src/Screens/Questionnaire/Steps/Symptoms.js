import React, { useState, useContext, useEffect } from 'react';
import { Step, CheckboxList } from '../Components';
import { store } from '../store';

const potentialSymptoms = require('../symptoms.json');

export const Symptoms = (props) => {
    const [ symptoms, setSymptoms ] = useState([]);
    const { dispatch } = useContext(store);

    useEffect(() => {
        dispatch({ type: 'CHANGE_SYMPTOMS', payload: symptoms });
    }, [symptoms.join(',')]);

    return (
        <Step showNext={symptoms.length > 0} onNext={(n) => props.onNext(n)} step={props.step}>
            <CheckboxList options={potentialSymptoms} value={symptoms} setValue={(x) => setSymptoms(x)} question="Do you have any of the following symptoms?" />
        </Step>
    )
}