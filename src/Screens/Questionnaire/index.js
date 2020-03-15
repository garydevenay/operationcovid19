import React from 'react';
import { QuestionnaireContext } from './QuestionnaireContext';
import { questions } from './questions';

export const Questionnaire = () => {


    return (
        <QuestionnaireContext.Provider value={questions}>
            <div className="container">
                <div class="jumbotron mt-5">
                    <h1 class="display-4">Covid-19 Questionnaire</h1>
                    <p class="lead">A small description of what this questionnaire is and what it will contribute towards.</p>
                    <hr class="my-4" />
                        <p>By clicking "Start" I agree that I am submitting my information to be part of the "Operation Covid-19" database which will display anonymised metrics publicly including my answers.</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Start</a>
                    </div>
                </div>
        </QuestionnaireContext.Provider>
    )
}