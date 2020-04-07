import React from 'react';

export const NextButton = (props) => {
    return (
        <div className="card-footer">
            <button className="btn btn-primary btn-lg" onClick={() => props.onNext()}>{props.children || "Next"}</button>
        </div>
    )
}