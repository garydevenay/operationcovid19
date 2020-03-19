import React, { useContext, useState } from 'react';
import { QuestionnaireContext } from '../QuestionnaireContext';
import { NextButton, CheckboxList } from '../Components';

const potentialSymptoms = require('../symptoms.json');

export const Symptoms = (props) => {
    const step = useContext(QuestionnaireContext);
    const [ symptoms, setSymptoms ] = useState([]);

    if (step < props.step) return null;

    const _nextButton = () => {
        if (step === props.step && symptoms !== null) {
            return <NextButton onNext={() => props.onNext(1)} />
        }
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3>Do you have any of the following symptoms?</h3>
                <CheckboxList options={potentialSymptoms} setValue={(x) => setSymptoms(x)} />
            </div>
            {_nextButton()}
        </div>
    )
}