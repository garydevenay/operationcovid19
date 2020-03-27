import React, { useState, useContext, useEffect } from 'react';
import { Step, Boolean } from '../Components'
import { store } from '../store'

export const Isolation = (props) => {
    const [ isIsolated, setIsIsolated ] = useState(null);
    const { dispatch } = useContext(store);

    useEffect(() => {
        dispatch({ type: 'IS_ISOLATED', payload: isIsolated });
    }, [isIsolated]);

    return (
        <Step showNext={isIsolated !== null} onNext={(n) => props.onNext(n)} step={props.step}>
            <Boolean value={isIsolated} setValue={setIsIsolated} question="Are you currently self isolating?" />
        </Step>
    )
}