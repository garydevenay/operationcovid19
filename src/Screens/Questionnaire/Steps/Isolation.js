import React, { useState, useContext } from 'react';
import { Boolean, NextButton } from '../Components'
import { QuestionnaireContext } from '../QuestionnaireContext';

export const Isolation = (props) => {
    const step = useContext(QuestionnaireContext);
    const [ isIsolated, setIsIsolated ] = useState(null);

    if (step < props.step) return null;

    const _nextButton = () => {
        if (step === props.step && isIsolated !== null) {
            return (
                <NextButton onNext={() => props.onNext(1)} />
            )
        }
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3>Are you currently self isolating?</h3>
                <Boolean value={isIsolated} setValue={setIsIsolated} />
            </div>
            {_nextButton()}
        </div>
    )
}