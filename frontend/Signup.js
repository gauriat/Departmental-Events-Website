/*import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SignupValidation from './SignupValidation';

function Register() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        usn: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(SignupValidation(values));
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-white vh-85'>
            <div style={{ backgroundColor: '#E6E6FA', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' }}>
                <h2>Register</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="firstName"><strong>First Name</strong></label>
                        <input type="text" placeholder='Enter FirstName' name='firstName'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.firstName && <span className='text-danger'> {errors.firstName}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="lastName"><strong>Last Name</strong></label>
                        <input type="text" placeholder='Enter LastName' name='lastName'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.lastName && <span className='text-danger'> {errors.lastName}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' 
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="usn"><strong>USN</strong></label>
                        <input type="usn" placeholder='Enter USN' name='usn'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.usn && <span className='text-danger'> {errors.usn}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button className='btn btn-succes w-100 rounded-0'>Register</button>
                    <Link to="/Login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Register*/

/*import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Validation from './SignupValidation';

function Register() {
    const [values, setValues] = useState({
        name: '',
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
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="firstName"><strong>First Name</strong></label>
                        <input type="text" placeholder='Enter FirstName' name='firstName'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.firstName && <span className='text-danger'> {errors.firstName}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="lastName"><strong>Last Name</strong></label>
                        <input type="text" placeholder='Enter LastName' name='lastName'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.lastName && <span className='text-danger'> {errors.lastName}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' 
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="usn"><strong>USN</strong></label>
                        <input type="usn" placeholder='Enter USN' name='usn'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.usn && <span className='text-danger'> {errors.usn}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button className='btn btn-succes w-100 rounded-0'>Register</button>
                    <Link to="/Login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Register*/


/*import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Validation from './SignupValidation';
//import axios from 'axios';

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        usn: '',
        password: ''
    })
    
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-white vh-85'>
            <div style={{ backgroundColor: '#E6E6FA', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' }}>
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='usn'><strong>USN</strong></label>
                        <input type="usn" placeholder='Enter USN' name='usn'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.usn && <span className='text-danger'>{errors.usn}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                    <p>You agree to terms and conditions</p>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Register*/



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        usn: '',
        password: ''
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    
        if (
            !errors.name &&
            !errors.email &&
            !errors.usn &&
            !errors.password &&
            values.name &&
            values.email &&
            values.usn &&
            values.password
        ) {
            axios.post('http://localhost:8081/register', {
                name: values.name,
                email: values.email,
                usn: values.usn,
                password: values.password
            })
            .then(res => {
                setRegistrationSuccess(true); // Set registration success state
                navigate('/login'); // Navigate to the login route on successful registration
            })
            .catch(err => console.error(err));
        }
    };    

    return (
        <div className='d-flex justify-content-center align-items-center bg-white vh-85'>
            <div style={{ backgroundColor: '#E6E6FA', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' }}>
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='usn'><strong>USN</strong></label>
                        <input type="usn" placeholder='Enter USN' name='usn'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.usn && <span className='text-danger'>{errors.usn}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button to='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                    <p>Already have an account</p>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
