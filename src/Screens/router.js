import React from 'react';
import { Questionnaire } from './Questionnaire';
import { Map } from './Map';

export const routes = {
    '/questionnaire': () => <Questionnaire />,
    '/map': () => <Map />
}