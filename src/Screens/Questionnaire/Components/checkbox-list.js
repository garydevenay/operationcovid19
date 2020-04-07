import React, { useReducer, useEffect } from 'react';

export const CheckboxList = (props) => {
    const boxes = props.options;
    const [ selected, dispatch ] = useReducer((selected, { type, value }) => {
        switch(type) {
            case "add":
                return [...selected, value];
            case "remove":
                return selected.filter((_, index) => index !== value);
            case "radio":
                return [value];
            default:
                return selected;
        }
    }, []);

    const _onClick = (e) => {
        let checked = e.target.checked;
        let value = e.target.value;

        if (props.type === 'radio') {
            dispatch({ type: 'radio', value });
        }

        if (checked) {
            dispatch({ type: "add", value});
        } else {
            dispatch({ type: "remove", value});
        }
    }

    useEffect(() => {
        props.setValue(selected);
    // eslint-disable-next-line
    }, [selected])

    return (
        <>
        <h3>{props.question}</h3>
        {boxes.map(x => {
            return (
                <div className="form-check mb-2" key={x.value}>
                    <input className="form-check-input" type={props.type || "checkbox"} value={x.value} id={x.value} name={(props.type === "radio" ? props.question : x.value)} onClick={(e) => _onClick(e)} />
                    <label className="form-check-label" for={x.value}>
                        {x.title}
                    </label>
                </div>
            )
        })}
        </>
    )
}