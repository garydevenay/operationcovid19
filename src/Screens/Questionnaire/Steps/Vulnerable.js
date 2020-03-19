import React, { useContext, useState } from 'react';
import { QuestionnaireContext } from '../QuestionnaireContext';
import { NextButton, Boolean } from '../Components';

export const Vulnerable = (props) => {
    const step = useContext(QuestionnaireContext);
    const [ isOver65, setIsOver65 ] = useState(null);
    const [ hasPreExisting, setHasPreExisting ] = useState(null);
    const [ medicalCondition, setMedicalCondition ] = useState(null);

    if (step < props.step) return null;

    const _nextButton = () => {
        if (step === props.step && isOver65 !== null && hasPreExisting) {
            return <NextButton onNext={() => props.onNext(1)} />
        }
    }

    const _hadPreExistingCondition = () => {
        if (!hasPreExisting) return null;

        return (
            <>
                <h4>Enter medical condition <i>(optional)</i></h4>
                <textarea className="form-control" placeholder=""></textarea>
            </>
        )
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3>Are you over 65 years of age?</h3>
                <Boolean value={isOver65} setValue={setIsOver65} />
                <h3>Do you have a pre-existing condition?</h3>
                <Boolean value={hasPreExisting} setValue={setHasPreExisting} />
                {_hadPreExistingCondition()}
            </div>
            {_nextButton()}
        </div>
    )
}