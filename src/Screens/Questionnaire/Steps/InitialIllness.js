import React, { useState, useContext, useEffect } from 'react';
import { Step, DatePicker } from '../Components';
import { store } from '../store';

export const InitialIllness = (props) => {
    const [illnessDate, setIllnessDate] = useState('');
    const { dispatch } = useContext(store);

    useEffect(() => {
        dispatch({ type: 'ILLNESS_START', payload: illnessDate });
    }, [dispatch, illnessDate]);

    return (
        <Step showNext={illnessDate !== ''} onNext={(n) => props.onNext(n)} step={props.step}>
            <DatePicker value={illnessDate} setValue={setIllnessDate} question="When did you start to feel ill?" />
        </Step>
    )
}