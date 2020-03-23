import React, { useState } from 'react';

export const Boolean = (props) => {
    const [boolean, setBoolean] = useState(props.value)

    const setValue = (v) => {
        setBoolean(v);
        props.setValue(v);
    }

    return (
        <div class="btn-group btn-group-toggle mt-3 mb-4" data-toggle="buttons">
            <label class="btn btn-lg btn-primary">
                <input type="radio" name="contact" id="yes" checked={boolean === true} value={true} onClick={() => setValue(true)} /> Yes
            </label>
            <label class="btn btn-lg btn-primary">
                <input type="radio" name="contact" id="no" checked={boolean === false} value={false} onClick={(() => setValue(false))} /> No
            </label>
        </div>
    )
}