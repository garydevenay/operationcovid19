import React, { useState, useContext, useEffect } from 'react';
import { Step, DatePicker } from '../Components';
import { store } from '../store';

export const When = (props) => {
    const { dispatch } = useContext(store);
    const [when, setWhen] = useState(null);

    useEffect(() => {
        dispatch({ type: 'WHEN_CONTRACTED', payload: when });
    }, [when])

    return (
        <Step onNext={(n) => props.onNext(n)} showNext={when !== null} step={props.step}>
            <DatePicker value={when} setValue={setWhen} question="When do you think you may have first caught Covid-19?" />
        </Step>
    )
}