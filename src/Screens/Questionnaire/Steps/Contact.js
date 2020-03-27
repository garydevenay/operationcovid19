import React, { useState, useContext, useEffect } from 'react';
import { Step, Boolean, DatePicker } from '../Components';
import { store } from '../store';

export const Contact = (props) => {
    const [inContact, setInContact] = useState(null);
    const [inContactDate, setInContactDate] = useState(null); 
    const { dispatch } = useContext(store);

    useEffect(() => {
        dispatch({ type: 'CONFIRMED_CONTACT', payload: inContact });
    }, [inContact])

    useEffect(() => {
        dispatch({ type: 'CONFIRMED_CONTACT_DATE', payload: inContactDate });
    }, [inContactDate])

    const _when = () => {
        if (inContact !== true) return null;

        return <DatePicker value={inContactDate} setValue={setInContactDate} question="When did you come in to contact?" />
    }

    return (
        <Step showNext={inContact == false || (inContact && inContactDate)} onNext={(n) => props.onNext(n)} step={props.step}>
            <Boolean value={inContact} setValue={setInContact} question="Have you been in contact with someone who tested positive for COVID-19 in the last 30 days?" />
            {_when()}
        </Step>
    )
}