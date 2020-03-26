import React, { useState } from 'react';
import { Step, LocationAutocomplete, Boolean, TextInput } from '../Components'

export const Additional = (props) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState(null);
    const [age, setAge] = useState(null);
    const [city, setCity] = useState(null);
    const [travel, setTravel] = useState(null);
    const [followUp, setFollowUp] = useState(null);
    const [email, setEmail] = useState('');

    const showSave = () => {
        if (firstName.length > 0 &&
            lastName.length > 0 &&
            sex !== null &&
            age !== null &&
            city !== null &&
            travel !== null &&
            followUp !== null &&
            email.length > 0) {
                return true;
            }

        return false;
    }

    return (
        <Step showNext={showSave()} onNext={(n) => props.onNext(n)} step={props.step}>
            <div class="form-row">
                <div class="form-group col-md-5">
                    <TextInput label="First Name" value={firstName} setValue={setFirstName} />
                </div>
                <div class="form-group col-5 col-md-2">
                    <TextInput label="Middle Initial" value={middleName} setValue={setMiddleName} />
                </div>
                <div class="form-group col-md-5">
                    <TextInput label="Last Name" value={lastName} setValue={setLastName} />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-12 col-md-4">
                    <label>Sex</label>
                </div>
                <div class="form-group col-12 col-md-4">
                    <TextInput type="number" label="Age" value={age} setValue={setAge} />
                </div>
            </div>
            <div class="form-row">
                <div class="col-12">
                    <LocationAutocomplete label="City of Residence" placeholder="City" value={city} setValue={setCity} />
                </div>
            </div>
            <div class="form-row mb-3">
                <div class="col-12">
                    <TextInput type="email" label="Email Address" value={email} setValue={setEmail} />
                </div>
            </div>
            <div class="form-row">
                <div class="col-12">
                    <Boolean question="Have you traveled outside your country of residence in the last 90 days?" value={travel} setValue={setTravel} />
                </div>
            </div>
            <div class="form-row">
                <div class="col-12">
                    <Boolean question="Would you be interested in being updated about medical tests that can confirm whether you have had coronavirus and if you may be immune to the disease?" value={followUp} setValue={setFollowUp} />
                </div>
            </div>
        </Step>
    )
}