import React, { useContext, useState } from 'react';
import { store, NEXT_STEP, SAVE_LOCATION } from '../QuestionnaireContext';
import { LocationAutocomplete, NextButton } from '../Components';

export const Location = (props) => {
    const {state, dispatch} = useContext(store)

    const _nextButton = () => {
        if (state.step === props.step && state.submission.location !== null) {
            return (
                <NextButton onNext={() => {
                    dispatch({type: NEXT_STEP});
                    props.onNext();
                }
            } />
            )
        }

        return null;
    }

    const setLocation = (value) => {
        dispatch({type: SAVE_LOCATION, location: value})
    }

    return (
        <div class="card mb-3">
            <div class="card-body">
                <h3>Where are you located?</h3>
                <LocationAutocomplete value={state.location} setValue={setLocation} />
            </div>
            {_nextButton()}
        </div>
    )
}