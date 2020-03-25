import React, { useContext, useState, useEffect } from 'react';
import { store, SAVE_CONTACT, NEXT_STEP } from '../QuestionnaireContext';
import { Boolean, NextButton } from '../Components';

export const Contact = (props) => {
    const { state, dispatch } = useContext(store)
    
    const _nextButton = () => {
        if (state.step === props.step && state.submission.hasHadContact !== null) {
            return (
                <NextButton onNext={() => {
                    dispatch({type: NEXT_STEP});
                    props.onNext();
                }
            } />
            )
        }
    }

    const setValue = (value) => {
        dispatch({type: SAVE_CONTACT, hasHadContact: value });
    }

    return (
        <div class="card mb-3">
            <div class="card-body">
                <h3>Have you been in contact with someone who tested positive for COVID-19 in the last 30 days?</h3>
                <Boolean value={state.submission.hasHadContact} setValue={setValue} />
            </div>
            {_nextButton()}
        </div>
    )
}