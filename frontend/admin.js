import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import Navbar from './navbar/navbar1'
import axios from 'axios';

function AdminLogin() {
    const [values, setValues] = useState({
        email: '',
        password: ''
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
                const response = await axios.get('http://localhost:8081/fetch_all_admin');
                const users = response.data;

                const user = users.find(
                    (user) => user.email === values.email && user.password === values.password
                );

                if (user) {
                    // Redirect to the 'events' page upon successful login
                    navigate('/adminHome');
                } else {
                    console.log('Invalid credentials');
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-85'>
            <Navbar/>
            <div style={{ backgroundColor: '#7FC7D9', padding: '1.5rem', borderRadius: '0.5rem', width: '25%', paddingTop:'100px' }}>
                <h2>Sign-In</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;