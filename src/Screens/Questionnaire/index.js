import React, { useState } from 'react';
import { QuestionnaireContext } from './QuestionnaireContext';
import { questions } from './questions';
import { Location, Contact, Tested, Isolation, Symptoms } from './Steps';

export const Questionnaire = () => {
    const [ step, setStep ] = useState(0);

    const next = () => setStep(step + 1);
    const previous = () => setStep(step - 1);

    return (
        <QuestionnaireContext.Provider value={step}>
            <div className="container">
                <div class="jumbotron mt-5">
                    <h1 class="display-4">Covid-19 Questionnaire</h1>
                    <p class="lead">A small description of what this questionnaire is and what it will contribute towards.</p>
                    <hr class="my-4" />
                    <p>By clicking "Start" I agree that I am submitting my information to be part of the "Operation Covid-19" database which will display anonymised metrics publicly including my answers.</p>
                    { step == 0 ? <a class="btn btn-primary btn-lg" onClick={() => next()} href="#" role="button">Start</a> : null}
                </div>

                <Location onNext={() => next()} step={1} />
                <Contact onNext={() => next()} step={2} />
                <Tested onNext={() => next()} step={3} />
                <Isolation onNext={() => next()} step={4} />
                <Symptoms onNext={() => next()} step={5} />
            </div>
        </QuestionnaireContext.Provider>
    )
}