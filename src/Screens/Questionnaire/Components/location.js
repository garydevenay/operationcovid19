import React, { useState, useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';

export const LocationAutocomplete = (props) => {
    const [address, setAddress] = useState('');

    useEffect(() => {
        geocodeByPlaceId(address.place_id).then(function(res) {
            let data = res[0]
            console.log(data);
            let result = {
                place: data.address_components[data.address_components.length - 1],
                geometry: {
                    lat: data.geometry.location.lat(),
                    lng: data.geometry.location.lng()
                },
                address: data.formatted_address,
                place_id: data.place_id
            }

            props.setValue(result);
        });
    }, [address]);

    return (
        <>
        {props.question ? <h3>{props.question}</h3> : null}
        <div className="input-group-lg mt-3 mb-3">
            {props.label ? <label>{props.label}</label> : null}
            <GooglePlacesAutocomplete 
                inputClassName="form-control" 
                placeholder={props.placeholder || "Your current location"}
                onSelect={(e) => setAddress(e)}
            />
        </div>
        </>
    )
}