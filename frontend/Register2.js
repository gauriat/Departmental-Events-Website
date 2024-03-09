/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import Navbar from './navbar/navbar1'
import axios from 'axios';

function Register2() {
    const [values, setValues] = useState({
        name: '',
        email: '',
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
            if (!errors.email && values.email) {
                const response = await axios.post('http://localhost:8081/Register2', {
                    name: values.name,
                    email: values.email,
                    usn: values.usn,
                    sem: values.sem
                });
    
                const user = response.data;
    
                if (user) {
                    // Redirect to the 'events' page upon successful login
                    navigate('/events1');
                    // Show success alert
                    alert('Registration successful!');
                } else {
                    // Show failure alert
                    alert('Registration failed. Please check your credentials.');
                }
            }
        } catch (error) {
            console.error('Error during Register:', error);
            // Show failure alert in case of an error
            alert('An error occurred during registration. Please try again.');
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
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register2;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './RegisterValidation';
import Navbar from './navbar/navbar1';
import axios from 'axios';

function Register2() {
    const [values, setValues] = useState({
        name: '',
        email: '',
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
            if (!errors.email && values.email) {
                const response = await axios.post('http://localhost:8081/Register2', {
                    name: values.name,
                    email: values.email,
                    usn: values.usn,
                    sem: values.sem
                });

                const result = response.data;

                if (result.success) {
                    // Redirect to the 'events' page upon successful registration
                    navigate('/events1');
                    // Show success alert
                    alert('Registration successful!');
                } else {
                    // Show failure alert
                    alert(result.error || 'Registration Successful');
                    navigate('/events1');
                }
            }
        } catch (error) {
            console.error('Error during Register:', error);
            // Show failure alert in case of an error
            alert('An error occurred during registration. Please try again.');
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
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register2;