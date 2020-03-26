import React, { useContext } from 'react';
import { QuestionnaireContext } from '../QuestionnaireContext';
import { NextButton } from './index'

export const Step = (props) => {
    const step = useContext(QuestionnaireContext)

    //if (step < props.step) return null;

    const _nextButton = () => {
        if (props.showNext) {
            return (
                <NextButton onNext={() => props.onNext(1)} />
            )
        }
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                {props.children}
            </div>
            {_nextButton()}
        </div>
    )
}