import React, { useState } from 'react';

export const CheckboxList = (props) => {
    const boxes = props.options;
    const [ selected, setSelected ] = useState([]);

    const _onCheck = (e) => {
        let val = e.target.value;
        let i = selected.findIndex((x) => x.value === val);
        if (val === -1) {
            setSelected([val]);
        } else {
            setSelected(selected.splice(i-1, 1));
        }

        console.log(selected);
    }

    return (
        boxes.map(x => {
            return (
                <div className="form-check mb-2" key={x.value}>
                    <input className="form-check-input" type="checkbox" value={x.value} id={x.value} onClick={(e) => _onCheck(e)} />
                    <label className="form-check-label" for={x.value}>
                        {x.title}
                    </label>
                </div>
            )
        })
    )
}