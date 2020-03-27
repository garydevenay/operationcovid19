import React, { useState } from 'react';

export const Range = (props) => {
    const [input, setInput] = useState(0);

    const setValue = (v) => {
        setInput(v.target.value);
        props.setValue(v.target.value);
    }

    return (
        <>
            <h3>{props.question}</h3>
            <input type="range" min={props.min || 0} max={props.max} value={input} onChange={(v) => setValue(v)} className="form-control-range" step="1" />
            <span className="float-right">{props.maxLabel || props.max}</span>
            <span className="float-left">{props.minLabel || (props.min || 0)}</span>
        </>
    )
}