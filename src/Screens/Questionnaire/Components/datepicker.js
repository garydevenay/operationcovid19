import React, { useState } from 'react';

export const DatePicker = (props) => {
    const [date, setDate] = useState(props.value)

    const setValue = (v) => {
        setDate(v.target.value);
        props.setValue(v.target.value);
    }

    return (
        <div className="input-group date" data-provide="datepicker">
            <input type="date" className="form-control" value={date} onChange={(text) => setValue(text)} />
        </div>
    )
}