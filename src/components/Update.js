import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Update() {
    const [ id, setId ] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:1337/update`, {
            id,
            firstName,
            lastName,
            email,
            phoneNumber 
        })
    }
    useEffect(() => {
        setId(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setPhoneNumber(localStorage.getItem('Phone Number'));
    }, []);

    return (
        <form className='update-form'>
        <div className='form-control'>
            <label>
                First Name
            </label>
            <input type='text' placeholder='Enter First Name' value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>
                Last Name
            </label>
            <input type='text' placeholder='Enter Last Name' value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>
                Email
            </label>
            <input type='email' placeholder='Enter Email' value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>
                Phone Number
            </label>
            <input type='tel' placeholder='Enter Phone Number' value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
            <button type='submit' onClick={updateAPIData}>
                Update
            </button>
    </form>
    );
}