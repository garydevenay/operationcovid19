import React from 'react';
import { Questionnaire } from './Questionnaire';
import { StateProvider } from './Questionnaire/store';
import { Map } from './Map';
import { Confirm } from './Confirm';

export const routes = {
    '/thank-you': () => <Confirm />,
    '/questionnaire': () => <StateProvider><Questionnaire /></StateProvider>,
    '/': () => <Map />
}