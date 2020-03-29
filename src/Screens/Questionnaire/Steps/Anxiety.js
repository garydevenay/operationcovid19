import React, { useState, useContext, useEffect } from 'react';
import { Step, Range } from '../Components';
import { store } from '../store';

export const Anxiety = (props) => {
    const [anxietyLevel, setAnxietyLevel ] = useState(0);
    const { dispatch } = useContext(store);

    useEffect(() => {
        dispatch({ type: 'ANXIETY_LEVEL', payload: anxietyLevel });
    }, [anxietyLevel, dispatch]);

    return (
        <Step showNext={true} onNext={(n) => props.onNext(n)} step={props.step}>
            <Range value={anxietyLevel} setValue={setAnxietyLevel} max={10} minLabel="Completely Calm" maxLabel="Extremely Anxious" question="How anxious were you, or are you?" />
        </Step>
    )
}