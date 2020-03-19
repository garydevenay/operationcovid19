import React, { useContext, useState } from 'react';
import { QuestionnaireContext } from '../QuestionnaireContext';
import { Boolean, NextButton, DatePicker } from '../Components';

export const Contact = (props) => {
    const step = useContext(QuestionnaireContext)
    const [inContact, setInContact] = useState(null);
    const [inContactDate, setInContactDate] = useState(null); 

    if (step < props.step) return null;

    const _nextButton = () => {
        if (step === props.step && inContact !== null) {
            if (inContact && !inContactDate) return null;

            return (
                <NextButton onNext={() => props.onNext(1)} />
            )
        }
    }

    const _when = () => {
        if (inContact !== true) return null;

        return (
            <>
                <h4>When did you come in to contact?</h4>
                <DatePicker value={inContactDate} setValue={setInContactDate} />
            </>
        )
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3>Have you been in contact with someone who tested positive for COVID-19 in the last 30 days?</h3>
                <Boolean value={inContact} setValue={setInContact} />
                {_when()}
            </div>
            {_nextButton()}
        </div>
    )
}