import React, { useState } from 'react';

export const CheckboxList = (props) => {
    const boxes = props.options;

    return (
        {
            boxes.map(x => {
                return (
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1">
                            Default checkbox
                        </label>
                    </div>
            )
        })}
    )
}