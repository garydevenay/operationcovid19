import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const LocationAutocomplete = (props) => {
    //TODO: write state logic for selecting a place.

    return (
        <>
        {props.question ? <h3>{props.question}</h3> : null}
        <div className="input-group-lg mt-3 mb-3">
            {props.label ? <label>{props.label}</label> : null}
            <GooglePlacesAutocomplete 
                inputClassName="form-control" 
                placeholder={props.placeholder || "Your current location"}
                onSelect={(e) => props.setValue(e)}
            />
        </div>
        </>
    )
}