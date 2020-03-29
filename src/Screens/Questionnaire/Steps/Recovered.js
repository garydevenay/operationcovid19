import React, { useState, useContext, useEffect } from 'react';
import { Step, Boolean } from '../Components';
import { store } from '../store';

export const Recovered = (props) => {
    const [recovered, setRecovered] = useState(null);
    const { dispatch } = useContext(store);

    useEffect(() => {
        dispatch({ type: 'IS_RECOVERED', payload: recovered });
    }, [dispatch, recovered])

    return (
        <Step showNext={recovered !== null} onNext={(n) => props.onNext(n)} step={props.step}>
            <Boolean value={recovered} setValue={setRecovered} question="Do you believe you have recovered?" />
        </Step>
    )
}