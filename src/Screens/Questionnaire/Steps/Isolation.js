import React, { useState, useContext } from 'react';
import { Boolean, NextButton } from '../Components'
import { store, NEXT_STEP, SAVE_ISOLATION } from '../QuestionnaireContext';

export const Isolation = (props) => {
    const { state, dispatch } = useContext(store)

    const _nextButton = () => {
        if (state.step === props.step && state.submission.isSelfIsolating !== null) {
            return (
                <NextButton onNext={() => {
                        dispatch({type: NEXT_STEP});
                        props.onNext();
                    }
                } />
            )
        }
    }

    const setIsIsolated = (value) => {
        dispatch({type: SAVE_ISOLATION, isSelfIsolating: value });
    }

    return (
        <div class="card mb-3">
            <div class="card-body">
                <h3>Are you currently self isolating?</h3>
                <Boolean value={state.submission.isIsolated} setValue={setIsIsolated} />
            </div>
            {_nextButton()}
        </div>
    )
}