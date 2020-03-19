import React, { useContext, useState } from 'react';
import { QuestionnaireContext } from '../QuestionnaireContext';
import { LocationAutocomplete, NextButton } from '../Components';

export const Location = (props) => {
    const step = useContext(QuestionnaireContext)
    const [location, setLocation] = useState(null);

    if (step < props.step) return null;

    const _nextButton = () => {
        if (step == props.step && location !== null) {
            return (
                <NextButton onNext={() => props.onNext(1)} />
            )
        }

        return null;
    }

    return (
        <div class="card mb-3">
            <div class="card-body">
                <h3>Where are you located?</h3>
                <LocationAutocomplete value={location} setValue={setLocation} />
            </div>
            {_nextButton()}
        </div>
    )
}