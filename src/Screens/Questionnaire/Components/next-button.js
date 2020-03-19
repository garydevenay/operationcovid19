import React from 'react';

export const NextButton = (props) => {
    //TODO: write logic 

    return (
        <div className="card-footer">
            <a class="btn btn-primary btn-lg" onClick={() => props.onNext()} href="#" role="button">{props.children || "Next"}</a>
        </div>
    )
}