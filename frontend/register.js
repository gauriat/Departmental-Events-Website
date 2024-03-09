/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        usn: '',
        sem: '',
        password: ''
    });
    const [registrationMessage, setRegistrationMessage] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        try {
            if (
                !errors.name &&
                !errors.email &&
                !errors.usn &&
                !errors.sem &&
                !errors.password &&
                values.name &&
                values.email &&
                values.usn &&
                values.sem &&
                values.password
            ) {
                const response = await axios.post('http://localhost:8081/register', {
                    name: values.name,
                    email: values.email,
                    usn: values.usn,
                    sem: values.sem,
                    password: values.password
                });

                if (response.data.success) {
                    setRegistrationMessage('Registration successful! Details stored in Register1 database.');

                    // Redirect to the 'SuccessfulRegistration' page upon successful registration
                    navigate('/SuccessfulRegistration');
                } else {
                    setRegistrationMessage('Registration failed. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-white vh-85'>
            <div style={{ backgroundColor: '#E6E6FA', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' }}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            name='name'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='usn'><strong>USN</strong></label>
                        <input
                            type='text'
                            placeholder='Enter USN'
                            name='usn'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.usn && <span className='text-danger'>{errors.usn}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='sem'><strong>Sem</strong></label>
                        <input
                            type='text'
                            placeholder='Enter Sem'
                            name='sem'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.sem && <span className='text-danger'>{errors.sem}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='text'
                            placeholder='Enter Password'
                            name='password'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.usn && <span className='text-danger'>{errors.usn}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Register
                    </button>
                    <p>{registrationMessage}</p>
                </form>
            </div>
        </div>
    );
}

export default register;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import Navbar from './navbar/navbar1'
import axios from 'axios';

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        usn: '',
        sem: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    
        try {
            if (!errors.email && !errors.password && values.email && values.password) {
                const response = await axios.post('http://localhost:8081/Register', {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    usn: values.usn,
                    sem: values.sem
                });
    
                const user = response.data;
    
                if (user) {
                    // Redirect to the 'events' page upon successful login
                    navigate('/login');
                } else {
                    console.log('Invalid credentials');
                }
            }
        } catch (error) {
            console.error('Error during Register:', error);
        }
    };    

    return (
        <div className='d-flex justify-content-center align-items-center vh-85'>
            <Navbar/>
            <div style={{ backgroundColor: '#7FC7D9', padding: '1.5rem', borderRadius: '0.5rem', width: '25%', paddingTop:'100px' }}>
                <h2>Sign-In</h2>
                <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='name' onChange={handleInput} className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='usn'><strong>USN</strong></label>
                        <input type='text' placeholder='Enter USN' name='usn' onChange={handleInput} className='form-control rounded-0' />
                        {errors.usn && <span className='text-danger'>{errors.usn}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='sem'><strong>Sem</strong></label>
                        <input type='text' placeholder='Enter Sem' name='sem' onChange={handleInput} className='form-control rounded-0' />
                        {errors.sem && <span className='text-danger'>{errors.sem}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
