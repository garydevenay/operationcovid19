import React, { useContext, useState } from 'react';
import { store, NEXT_STEP, SAVE_SYMPTOMS } from '../QuestionnaireContext';
import { NextButton } from '../Components';

export const Symptoms = (props) => {
    const { state, dispatch } = useContext(store);
    
    const _nextButton = () => {
        if (state.step === props.step && state.submission.symptoms !== null) {
            return (
                <NextButton onNext={() => {
                    dispatch({type: NEXT_STEP});
                    props.onNext();
                }
            } />
                )
        }
    }

    const setSymptoms = (value) => {
        dispatch({type: SAVE_SYMPTOMS, symptoms: value})
    }

    return (
        <div class="card mb-3">
            <div class="card-body">
                <h3>Do you have any of the following symptoms?</h3>
                
            </div>
            {_nextButton()}
        </div>
    )
}