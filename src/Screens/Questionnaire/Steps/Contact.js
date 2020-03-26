import React, { useState } from 'react';
import { Step, Boolean, DatePicker } from '../Components';

export const Contact = (props) => {
    const [inContact, setInContact] = useState(null);
    const [inContactDate, setInContactDate] = useState(null); 

    const _when = () => {
        if (inContact !== true) return null;

        return <DatePicker value={inContactDate} setValue={setInContactDate} question="When did you come in to contact?" />
    }

    return (
        <Step showNext={(inContact !== null) || (inContact && inContactDate)} onNext={(n) => props.onNext(n)} step={props.step}>
            <Boolean value={inContact} setValue={setInContact} question="Have you been in contact with someone who tested positive for COVID-19 in the last 30 days?" />
            {_when()}
        </Step>
    )
}