import React, { useState } from 'react';
import { QuestionnaireContext } from './QuestionnaireContext';
import { Location, Contact, Tested, Isolation, Symptoms, Vulnerable } from './Steps';

export const Questionnaire = () => {
    const [ step, setStep ] = useState(0);
    const advance = (n) => setStep(step + n);

    return (
        <QuestionnaireContext.Provider value={step}>
            <div className="container">
                <div class="jumbotron mt-5">
                    <h1 class="display-4">Covid-19 Questionnaire</h1>
                    <p class="lead">A small description of what this questionnaire is and what it will contribute towards.</p>
                    <hr class="my-4" />
                    <p>By clicking "Start" I agree that I am submitting my information to be part of the "Operation Covid-19" database which will display anonymised metrics publicly including my answers.</p>
                    { step == 0 ? <a class="btn btn-primary btn-lg" onClick={() => advance(1)} href="#" role="button">Start</a> : null}
                </div>

                <Location onNext={(n) => advance(n)} step={1} />
                <Contact onNext={(n) => advance(n)} step={2} />
                <Tested onNext={(n) => advance(n)} step={3} />
                <Isolation onNext={(n) => advance(n)} step={4} />
                <Symptoms onNext={(n) => advance(n)} step={5} />
                <Vulnerable onNext={(n) => advance(n)} step={6} />
            </div>
        </QuestionnaireContext.Provider>
    )
}