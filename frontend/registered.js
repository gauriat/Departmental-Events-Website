import React from 'react';

function SuccessfulRegistration() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-white vh-85'>
            <div style={{ backgroundColor: '#E6E6FA', padding: '1.5rem', borderRadius: '0.5rem', width: '25%' }}>
                <h2>Registration Successful</h2>
                <p>Your registration was successful! You can now login with your credentials.</p>
            </div>
        </div>
    );
}

export default SuccessfulRegistration;
