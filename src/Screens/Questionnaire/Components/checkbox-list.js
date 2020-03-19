import React, { useState } from 'react';

export const CheckboxList = (props) => {
    const boxes = props.options;

    //TODO: Write state logic for checking x items in the list

    return (
        boxes.map(x => {
            return (
                <div class="form-check mb-2" key={x.value}>
                    <input class="form-check-input" type="checkbox" value={x.value} id={x.value} />
                    <label class="form-check-label" for={x.value}>
                        {x.title}
                    </label>
                </div>
            )
        })
    )
}