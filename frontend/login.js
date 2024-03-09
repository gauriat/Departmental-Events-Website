/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation'; 

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-white vh-85'>
            <div style={{ backgroundColor: '#E6E6FA', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' }}>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                         {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You agree to all terms and conditions</p>
                    <Link to="/Register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;*/


/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-white vh-85'>
            <div style={{ backgroundColor: '#E6E6FA', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' }}>
                <h2>Sign-In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You agree to terms and conditions</p>
                    <Link to="/Register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login*/



/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        try {
            if (!errors.email && !errors.password && values.email && values.password) {
                const response = await axios.get('http://localhost:8081/fetch_all_users');
                const users = response.data;

                const user = users.find((user) => user.email === values.email && user.password === values.password);

                if (user) {
                    // Redirect to dashboard or perform appropriate action upon successful login
                    console.log('Login Successful');
                } else {
                    console.log('Invalid credentials');
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-white vh-85'>
            <div style={{ backgroundColor: '#E6E6FA', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' }}>
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
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You agree to terms and conditions</p>
                    <Link to='/Register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;*/



//navigate to events page

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import Navbar from './navbar/navbar1'
 
function Login() {
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
                const response = await axios.post('http://localhost:8081/login', {
                    email: values.email,
                    password: values.password
                });
    
                if (response.data.success) {
                    // Redirect to the 'events' page upon successful login
                    navigate('/events1');
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
            <div style={{ backgroundColor: '#7FC7D9', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' , paddingTop:'100px'}}>
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
                    <Link to='/admin' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Register
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;


