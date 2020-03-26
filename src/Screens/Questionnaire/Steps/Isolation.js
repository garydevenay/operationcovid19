import React, { useState } from 'react';
import { Step, Boolean } from '../Components'

export const Isolation = (props) => {
    const [ isIsolated, setIsIsolated ] = useState(null);

    return (
        <Step showNext={isIsolated !== null} onNext={(n) => props.onNext(n)} step={props.step}>
            <Boolean value={isIsolated} setValue={setIsIsolated} question="Are you currently self isolating?" />
        </Step>
    )
}