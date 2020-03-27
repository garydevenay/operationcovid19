import React from 'react';

export const NextButton = (props) => {
    return (
        <div className="card-footer">
            <a className="btn btn-primary btn-lg" onClick={() => props.onNext()} href="javascript:;" role="button">{props.children || "Next"}</a>
        </div>
    )
}