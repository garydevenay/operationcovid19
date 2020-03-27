import React, { useState, useContext, useEffect } from 'react';
import { Step, Boolean } from '../Components';
import { store } from '../store';

export const Vulnerable = (props) => {
    const { dispatch } = useContext(store);
    const [ isOver65, setIsOver65 ] = useState(null);
    const [ hasPreExisting, setHasPreExisting ] = useState(null);
    const [ medicalCondition, setMedicalCondition ] = useState('');

    useEffect(() => {
        dispatch({ type: 'OVER_65', payload: isOver65 });
    }, [isOver65])

    useEffect(() => {
        dispatch({ type: 'PREEXISTING', payload: hasPreExisting });
    }, [hasPreExisting]);

    useEffect(() => {
        dispatch({ type: 'MEDICAL_CONDITION', payload: medicalCondition });
    }, [medicalCondition]);

    const _hadPreExistingCondition = () => {
        if (!hasPreExisting) return null;

        return (
            <>
                <h4>Enter medical condition</h4>
                <textarea className="form-control" value={medicalCondition} onChange={(e) => setMedicalCondition(e.target.value)} />
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