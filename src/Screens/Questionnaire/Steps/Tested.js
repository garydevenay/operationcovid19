import React, { useContext, useState } from 'react';
import { QuestionnaireContext } from '../QuestionnaireContext';
import { Boolean, LocationAutocomplete, NextButton, DatePicker } from '../Components';

export const Tested = (props) => {
    const step = useContext(QuestionnaireContext)
    const [positive, setPositive] = useState(null);
    const [testLocation, setTestLocation] = useState(null);
    const [cleared, setCleared] = useState(null);
    const [clearedDate, setClearedDate] = useState(null);

    if (step < props.step) return null;

    const _nextButton = () => {
        if (step === props.step && positive !== null) {
            if (positive === true && (testLocation === null || cleared === null)) return null;
            if (positive === true && cleared === true && clearedDate === null) return null;

            return (
                <NextButton onNext={() => props.onNext(1)} />
            )
        }
    }

    const _isPositive = () => {
        if (!positive) return null;

        return (
            <>
                <h4>Where did you get tested?</h4>
                <LocationAutocomplete placeholder="City/Town of test" value={testLocation} setValue={setTestLocation} />
                <h4>Have you since been cleared of COVID-19?</h4>
                <Boolean value={cleared} setValue={setCleared} />
                {_isCleared()}
            </>
        )
    }

    const _isCleared = () => {
        if (!cleared) return null;

        return (
            <>
                <h4>When were you cleared?</h4>
                <DatePicker value={clearedDate} setValue={setClearedDate} />
            </>
        )
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3>Have you tested positive for COVID-19?</h3>
                <Boolean value={positive} setValue={setPositive} />
                {_isPositive()}
            </div>
            {_nextButton()}
        </div>
    )
}