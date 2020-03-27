import React, { useState, useEffect, useContext } from 'react';
import { QuestionnaireContext } from './QuestionnaireContext';
import { Location, Contact, Tested, Isolation, Symptoms, Vulnerable, When, InitialIllness, HowLong, Recovered, HouseMates, Feeling, Anxiety, Additional } from './Steps';
import { store } from './store';

export const Questionnaire = () => {
    const [step, setStep] = useState(0);
    const advance = (n) => setStep(step + n);

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [step]);

    return (
        <QuestionnaireContext.Provider value={step}>
            <div className="jumbotron">
                <h1 className="display-4">Covid-19 Questionnaire</h1>
                <p className="lead">This questionnaire is intended for people who believe they may have or had Covid-19.</p>
                
                <p>By clicking "Start" I agree that I am submitting my information to be part of the "Operation Covid-19" database which will display anonymised metrics publicly including my answers.</p>
                {step === 0 ? <a className="btn btn-primary btn-lg" onClick={() => advance(1)} href="#" role="button">Start</a> : null}
            </div>

            <Location onNext={(n) => advance(n)} step={1} />
            <When onNext={(n) => advance(n)} step={2} />
            <InitialIllness onNext={(n) => advance(n)} step={3} />
            <HowLong onNext={(n) => advance(n)} step={4} />
            <Contact onNext={(n) => advance(n)} step={5} />
            <Tested onNext={(n) => advance(n)} step={6} />
            <Isolation onNext={(n) => advance(n)} step={7} />
            <Recovered onNext={(n) => advance(n)} step={8} />
            <HouseMates onNext={(n) => advance(n)} step={9} />
            <Symptoms onNext={(n) => advance(n)} step={10} />
            <Feeling onNext={(n) => advance(n)} step={11} />
            <Anxiety onNext={(n) => advance(n)} step={12} />
            <Vulnerable onNext={(n) => advance(n)} step={13} />
            <Additional onNext={(n) => advance(n)} step={14} />
        </QuestionnaireContext.Provider>
    )
}