import React from 'react';
import { Questionnaire } from './Questionnaire';
import { StateProvider } from './Questionnaire/store';
import { Map } from './Map';
import { Confirm } from './Confirm';
import { PrivacyPolicy, About } from './Content';

export const routes = {
    '/thank-you': () => <Confirm />,
    '/questionnaire': () => <StateProvider><Questionnaire /></StateProvider>,
    '/privacy-policy': () => <PrivacyPolicy />,
    '/about-us': () => <About />,
    '/': () => <Map />
}