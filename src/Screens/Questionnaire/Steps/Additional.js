import React, { useState, useContext, useEffect } from 'react';
import { Step, LocationAutocomplete, Boolean, TextInput, CheckboxList } from '../Components';
import { store } from '../store';
import { Save } from '../../../API'

export const Additional = (props) => {
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState(null);
    const [age, setAge] = useState(null);
    const [city, setCity] = useState(null);
    const [travel, setTravel] = useState(null);
    const [followUp, setFollowUp] = useState(null);
    const [email, setEmail] = useState('');
    const options = [
        { title: 'Male', value: 'male' },
        { title: 'Female', value: 'female' },
        { title: 'Other', value: 'other' }
    ]

    useEffect(() => {
        dispatch({ type: 'FIRST_NAME', payload: firstName })
    }, [dispatch, firstName]);

    useEffect(() => {
        dispatch({ type: 'MIDDLE_NAME', payload: middleName });
    }, [dispatch, middleName]);

    useEffect(() => {
        dispatch({ type: 'LAST_NAME', payload: lastName });
    }, [dispatch, lastName]);

    useEffect(() => {
        dispatch({ type: 'SEX', payload: sex });
    }, [dispatch, sex])

    useEffect(() => {
        dispatch({ type: 'AGE', payload: age });
    }, [age, dispatch]);

    useEffect(() => {
        dispatch({ type: 'CITY', payload: city });
    }, [city, dispatch]);

    useEffect(() => {
        dispatch({ type: 'TRAVEL', payload: travel });
    }, [dispatch, travel]);

    useEffect(() => {
        dispatch({ type: 'FOLLOW_UP', payload: followUp });
    }, [dispatch, followUp]);

    useEffect(() => {
        dispatch({ type: 'EMAIL', payload: email });
    }, [dispatch, email]);

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

    const saveReport = () => {
        Save(globalState.state);
        window.location.href = '/thank-you';
    }

    return (
        <Step showNext={showSave()} onNext={() => saveReport()} step={props.step} nextText="Submit Self Report">
            <div className="form-row">
                <div className="form-group col-md-5">
                    <TextInput label="First Name" value={firstName} setValue={setFirstName} />
                </div>
                <div className="form-group col-5 col-md-2">
                    <TextInput label="Middle Initial" value={middleName} setValue={setMiddleName} />
                </div>
                <div className="form-group col-md-5">
                    <TextInput label="Last Name" value={lastName} setValue={setLastName} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-12 col-md-4">
                    <label>Sex</label>
                    <CheckboxList question=" " options={options} type="radio" value={sex} setValue={setSex} />
                </div>
                <div className="form-group col-12 col-md-4">
                    <TextInput type="number" label="Age" value={age} setValue={setAge} />
                </div>
            </div>
            <div className="form-row">
                <div className="col-12">
                    <LocationAutocomplete label="City of Residence" placeholder="City" value={city} setValue={setCity} />
                </div>
            </div>
            <div className="form-row mb-3">
                <div className="col-12">
                    <TextInput type="email" label="Email Address" value={email} setValue={setEmail} />
                </div>
            </div>
            <div className="form-row">
                <div className="col-12">
                    <Boolean question="Have you traveled outside your country of residence in the last 90 days?" value={travel} setValue={setTravel} />
                </div>
            </div>
            <div className="form-row">
                <div className="col-12">
                    <Boolean question="Would you be interested in being updated about medical tests that can confirm whether you have had coronavirus and if you may be immune to the disease?" value={followUp} setValue={setFollowUp} />
                </div>
            </div>
        </Step>
    )
}