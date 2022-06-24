import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const postData = (e) => {
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phoneNumber);
        const newUser = {
            firstName,
            lastName,
            email,
            phoneNumber
        };
        axios.post(`http://localhost:1337/create`, newUser)
    }
    return (
        <form className='add-form'>
        <div className='form-control'>
            <label>
                First Name
            </label>
            <input type='text' placeholder='Enter First Name' 
            onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>
                Last Name
            </label>
            <input type='text' placeholder='Enter Last Name' 
            onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>
                Email
            </label>
            <input type='email' placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>
                Phone Number
            </label>
            <input type='tel'
            onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
            <button type='submit' onClick={postData}>
                Submit
            </button>
    </form>
    )
}
