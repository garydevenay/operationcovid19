import React from 'react';
import { Questionnaire } from './Questionnaire';
import { StateProvider } from './Questionnaire/store';
import { Map } from './Map';

export const routes = {
    '/questionnaire': () => <StateProvider><Questionnaire /></StateProvider>,
    '/': () => <Map />
}