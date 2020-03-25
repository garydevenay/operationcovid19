import React, { useContext, useState } from 'react';
import { store, NEXT_STEP, SAVE_SYMPTOMS, SAVE_TESTED } from '../QuestionnaireContext';
import { Boolean, LocationAutocomplete, NextButton } from '../Components';

export const Tested = (props) => {
    const { state, dispatch } = useContext(store);
    const [positive, setPositive] = useState(null);
    const [testLocation, setTestLocation] = useState(null);
    const [cleared, setCleared] = useState(null);
    const [clearedDate, setClearedDate] = useState(null);

    //if (step < props.step) return null;

    const _nextButton = () => {
        if (state.step === props.step && state.submission.hasTestedResult !== null) {
            if (positive === true && (testLocation === null || cleared === null)) return null;
            if (positive === true && cleared === true && clearedDate === null) return null;

            return (
                <NextButton onNext={() => {
                    dispatch({type: NEXT_STEP});
                    props.onNext();
                }
            } />
            )
        }
    }

    const setTested = (value) => {
        dispatch({type: SAVE_TESTED, tested: value})
    }

    const _isPositive = () => {
        if (!positive) return null;

        return (
            <div>
                <h4>Where did you get tested?</h4>
                <LocationAutocomplete placeholder="City/Town of test" value={testLocation} setValue={setTestLocation} />
                <h4>Have you since been cleared of COVID-19?</h4>
                <Boolean value={cleared} setValue={setCleared} />
                {_isCleared()}
            </div>
        )
    }

    const _isCleared = () => {
        if (!cleared) return null;

        return (
            <>
                <h4>When were you cleared?</h4>
                //Date
            </>
        )
    }

    return (
        <div class="card mb-3">
            <div class="card-body">
                <h3>Have you tested positive for COVID-19?</h3>
                <Boolean value={positive} setValue={setPositive} />
                {_isPositive()}
            </div>
            {_nextButton()}
        </div>
    )
}