import React, { useContext, useState, useEffect } from 'react';
import { QuestionnaireContext } from '../QuestionnaireContext';
import { Boolean, NextButton } from '../Components';

export const Contact = (props) => {
    const step = useContext(QuestionnaireContext)
    const [inContact, setInContact] = useState(null);

    //if (step < props.step) return null;

    const _nextButton = () => {
        if (step == props.step && inContact !== null) {
            return (
                <NextButton onNext={() => props.onNext()} />
            )
        }
    }

    return (
        <div class="card mb-3">
            <div class="card-body">
                <h3>Have you been in contact with someone who tested positive for COVID-19 in the last 30 days?</h3>
                <Boolean value={inContact} setValue={setInContact} />
            </div>
            {_nextButton()}
        </div>
    )
}