import React from 'react';
import { questions } from './questions';

export const NEXT_STEP = 'next step';
export const SAVE_CONTACT = 'save contact';
export const SAVE_ISOLATION = 'save isolation';
export const SAVE_LOCATION = 'save location';
export const SAVE_SYMPTOMS = 'save symptons';
export const SAVE_TESTED = 'save tested';

const initialState = { step: 0, submission: questions};
const store = React.createContext(initialState);
const { Provider } = store;

const QuestionnaireStateProvider = ( { children }) => {
  const [state, dispatch] = React.useReducer((state, action) =>  {
    switch(action.type) {
      case NEXT_STEP:
        return {...state, step: state.step++};
      case SAVE_CONTACT:
        return {...state, submission: {...state.submission, hasHadContact: action.hasHadContact }}
      case SAVE_LOCATION:
        return {...state, submission: {...state.submission, location: action.location }}
      case SAVE_ISOLATION:
        return {...state, submission: {...state.submission, isSelfIsolating: action.isSelfIsolating }}
      case SAVE_SYMPTOMS:
        return {...state, submission: {...state.submission, symptomList: action.symptoms }}
      case SAVE_TESTED:
        return {...state, submission: {...state.submission, hasTestedResult: action.symptoms }}
      default:
        throw new Error('Could not update state');
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>
};

export { store, QuestionnaireStateProvider }