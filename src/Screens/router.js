import React from 'react';
import { Questionnaire } from './Questionnaire';
import { StateProvider } from './Questionnaire/store';

export const routes = {
    '/questionnaire': () => <StateProvider><Questionnaire /></StateProvider>
}