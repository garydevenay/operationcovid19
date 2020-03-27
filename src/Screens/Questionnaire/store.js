import React, { createContext, useReducer } from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'CURRENT_LOCATION':
                return {
                    ...state,
                    currentLocation: action.payload
                }
            case 'ANXIETY_LEVEL':
                return {
                    ...state,
                    anxietyLevel: action.payload
                }
            case 'CONFIRMED_CONTACT':
                return {
                    ...state,
                    confirmedContact: action.payload
                }
            case 'CONFIRMED_CONTACT_DATE':
                return {
                    ...state,
                    confirmedContactDate: action.payload
                }
            case 'FEELING_CHANGE':
                return {
                    ...state,
                    generalFeeling: action.payload
                }
            case 'ILL_HOUSEMATES':
                return {
                    ...state,
                    illHousemates: action.payload
                }
            case 'ILLNESS_LENGTH':
                return {
                    ...state,
                    illnessLength: action.payload
                }
            case 'ILLNESS_START':
                return {
                    ...state,
                    illnessStart: action.payload
                }
            case 'IS_ISOLATED':
                return {
                    ...state,
                    isIsolated: action.payload
                }
            case 'IS_RECOVERED':
                return {
                    ...state,
                    isRecovered: action.payload
                }
            case 'CHANGE_SYMPTOMS':
                return {
                    ...state,
                    symptoms: action.payload
                }
            case 'IS_POSITIVE':
                return {
                    ...state,
                    isPositive: action.payload
                }
            case 'TEST_LOCATION':
                return {
                    ...state,
                    testLocation: action.payload
                }
            case 'CLEARED':
                return {
                    ...state,
                    cleared: action.payload
                }
            case 'CLEARED_DATE':
                return {
                    ...state,
                    clearedDate: action.payload
                }
            case 'REINFECTED':
                return {
                    ...state,
                    reinfected: action.payload
                }
            case 'OVER_65':
                return {
                    ...state,
                    over65: action.payload
                }
            case 'PREEXISTING':
                return {
                    ...state,
                    preexistingCondition: action.payload
                }
            case 'MEDICAL_CONDITION':
                return {
                    ...state,
                    medicalCondition: action.payload
                }
            case 'WHEN_CONTRACTED':
                return {
                    ...state,
                    whenContracted: action.payload
                }
            case 'FIRST_NAME':
                return {
                    ...state,
                    firstName: action.payload
                }
            case 'MIDDLE_NAME':
                return {
                    ...state,
                    middleInitial: action.payload
                }
            case 'LAST_NAME':
                return {
                    ...state,
                    lastName: action.payload
                }
            case 'SEX':
                return {
                    ...state,
                    sex: action.payload
                }
            case 'AGE':
                return {
                    ...state,
                    age: action.payload
                }
            case 'CITY':
                return {
                    ...state,
                    city: action.payload
                }
            case 'TRAVEL':
                return {
                    ...state,
                    recentTravel: action.payload
                }
            case 'FOLLOW_UP':
                return {
                    ...state,
                    followUp: action.payload
                }
            case 'EMAIL':
                return {
                    ...state,
                    email: action.payload
                }
            default:
                console.log(action);
                return state;
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
