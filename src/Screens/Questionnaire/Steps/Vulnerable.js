import React, { useState } from 'react';
import { Step, Boolean } from '../Components';

export const Vulnerable = (props) => {
    const [ isOver65, setIsOver65 ] = useState(null);
    const [ hasPreExisting, setHasPreExisting ] = useState(null);
    const [ medicalCondition, setMedicalCondition ] = useState(null);

    const _hadPreExistingCondition = () => {
        if (!hasPreExisting) return null;

        return (
            <>
                <h4>Enter medical condition <i>(optional)</i></h4>
                <textarea className="form-control" placeholder="" value={medicalCondition} onChange={(v) => setMedicalCondition(v)} />
            </>
        )
    }

    return (
        <Step showNext={(isOver65 !== null && !hasPreExisting) || (isOver65 !== null && hasPreExisting && medicalCondition !== null)} onNext={(n) => props.onNext(n)} step={props.step}>
            <Boolean value={isOver65} setValue={setIsOver65} question="Are you over 65 years of age?" />
            <Boolean value={hasPreExisting} setValue={setHasPreExisting} question="Do you have a pre-existing condition?" />
            {_hadPreExistingCondition()}
        </Step>
    )
}