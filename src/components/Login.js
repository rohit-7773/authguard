import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = ({authenticate}) => {
    const navigate = useNavigate();
    const {state} = useLocation();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setFormData(prevformData => ({
            ...prevformData,
            [name]: value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (formData.email === "rohit" && formData.password === "password") {
            authenticate(true);
            navigate(state?.path || '/');
        } else {
            console.log("user credentials is not correct");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <input 
                type='text'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <button>Login</button>
        </form>
    );
}

export default Login;