import React, {useState, useRef, useEffect} from 'react';
import 'animate.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// custom imports
import Button from '../components/Button'
import IconButton from './IconButton';
import colors from '../config/colors';
import ErrorMsg from './ErrorMsg';
import { useToken } from '../context/TokenProvider';

const LoginForm = ({ toggleLoginForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const { token,setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() && password) {
      axios.post('http://localhost:80/users/login', { emailOrTelephone: email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }).then((res) => {
        const authToken = res?.data?.token;
        setToken(authToken);

        // store the token in local storage
        localStorage.setItem('token', authToken);

        // clear the form
        setEmail('');
        setPassword('');
        setError(null);

        // redirect to the dashboard
        navigate('/dashboard');
      }).catch((err) => {
        setError(err?.response?.data?.error || err?.message || 'An error occurred');
      })
    } else {
      if(!email.trim()) {
        emailRef.current.classList.add('animate__animated', 'animate__shakeX');
        emailErrorRef.current.innerText = 'You must enter an email';
      }
      if (!password) {
        passwordRef.current.classList.add('animate__animated', 'animate__shakeX');
        passwordErrorRef.current.innerText = 'You must enter a password';
      }

      setTimeout(() => {
        if(emailRef.current) emailRef.current.classList.remove('animate__animated', 'animate__shakeX');
        if(passwordRef.current) passwordRef.current.classList.remove('animate__animated', 'animate__shakeX');
        if(emailErrorRef.current) emailErrorRef.current.innerText = '';
        if(passwordErrorRef.current) passwordErrorRef.current.innerText = '';
      }, 2000);
    }
  };

  // focus on the email input field
  useEffect(() => {
    if (emailRef) {
      emailRef.current.focus()
    }
  }, []);

   // Log the token whenever it changes
   useEffect(() => {
    console.log("Token is", token);
  }, [token]);

  return (
    <form onSubmit={handleSubmit}>
      <ErrorMsg
        msg={error}
        isVisible={error}
        className="mb-2 bg-red-100 py-1 px-2 text-center rounded"
        role='alert'
      />
      {/* email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded mt-1"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}  
          ref={emailRef}
          aria-describedby='email-error'
        />
        <span 
          className="sr-only" 
          ref={emailErrorRef}
          role='alert'
          id='email-error'
        ></span>
      </div> 
      {/* end of email */}
      {/* password */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full px-3 py-2 border rounded mt-1"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            ref={passwordRef}
            aria-describedby='password-error'
          />
          <IconButton
            Icon={showPassword ? FaRegEyeSlash : FaRegEye}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-1 mt-[2px]"
            label={showPassword ? 'Hide password' : 'Show password'}
            bgColor={colors.curiousBlue}
          />
        </div>
        <span 
          className="sr-only" 
          ref={passwordErrorRef} 
          role='alert'
          id='password-error'
        ></span>
      </div>
      {/* end of password */}
      <Button
        label="Login"
        color1="#4dc0b5"
        color2='#41a098' 
      />
      <Link
        to='/'
        onClick={toggleLoginForm}
        className="block text-center text-gray-700 mt-2"
      >Forgot password?</Link>
    </form>
  );
};

export default LoginForm;
