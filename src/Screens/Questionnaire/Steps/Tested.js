import React, { useState } from 'react';
import { Step, Boolean, LocationAutocomplete, DatePicker } from '../Components';

export const Tested = (props) => {
    const [positive, setPositive] = useState(null);
    const [testLocation, setTestLocation] = useState(null);
    const [cleared, setCleared] = useState(null);
    const [clearedDate, setClearedDate] = useState(null);
    const [reinfected, setReinfected] = useState(null);

    const _isPositive = () => {
        if (!positive) return null;

        return (
            <>
                <LocationAutocomplete placeholder="City/Town of test" value={testLocation} setValue={setTestLocation} question="Where did you get tested?" />
                <Boolean value={cleared} setValue={setCleared} question="Have you since been cleared of COVID-19?" />
                {_isCleared()}
                <Boolean value={reinfected} setValue={setReinfected} question="Do you believe you may have been re-infected since cleared?" />
            </>
        )
    }

    const _isCleared = () => {
        if (!cleared) return null;

        return <DatePicker value={clearedDate} setValue={setClearedDate} question="When were you cleared?" />
    }

    return (
        <Step showNext={(positive === true && cleared === false) || (positive === false) || (positive === true && testLocation !== null && cleared === false) || (positive === true && testLocation !== null && cleared && clearedDate !== null)} onNext={(n) => props.onNext(n)} step={props.step}>
            <Boolean value={positive} setValue={setPositive} question="Have you tested positive for COVID-19?" />
            {_isPositive()}
        </Step>
    )
}