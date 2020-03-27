import React, { useState, useContext, useEffect } from 'react';
import { Step, CheckboxList } from '../Components';
import { store } from '../store';

export const HowLong = (props) => {
    const [howLong, setHowLong] = useState(null);
    const { dispatch } = useContext(store);
    const options = [
        { title: "I never felt ill", value: "never" },
        { title: "I'm still ill", value: "still ill" },
        { title: "A couple of days or less", value: "few days" },
        { title: "Less than a week", value: "under 1 week" },
        { title: "One to two weeks", value: "1 - 2 weeks" },
        { title: "More than two weeks", value: "> 2 weeks" }
    ]

    useEffect(() => {
        dispatch({ type: 'ILLNESS_LENGTH', payload: howLong });
    }, [howLong]);

    return (
        <Step showNext={howLong !== null && howLong.length > 0} onNext={(n) => props.onNext(n)} step={props.step}>
            <CheckboxList type="radio" question="How long did you feel ill for?" value={howLong} setValue={setHowLong} options={options} />
        </Step>
    )
}