import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';

// custom imports
import colors from '../config/colors';
import Button from './Button';
import ErrorMsg from './ErrorMsg';
import IconButton from './IconButton';

const SignupForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isSignupFieldsValid, setIsSignupFieldsValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    let navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const formData = {
            username,
            email,
            phoneNumber,
            password,
        };
        // Form validation
        if (isSignupFieldsValid) {

            axios.post('http://localhost:80/users/signup', {
                    email: formData.email,
                    fullname: formData.username,
                    telephone: formData.phoneNumber,
                    password: formData.password,
                }).then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error('Error signing up user:', error);
                });

            // Clear form fields
            setUsername('');
            setEmail('');
            setPhoneNumber('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
        setIsValidPhoneNumber(validatePhoneNumber(value));
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        setIsValidEmail(validateEmail(value));
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
        setIsValidPassword(validatePassword(value));
    };

    const validatePassword = (value) => {
        // Regular expression for password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(value);
    };

    const validateEmail = (value) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const validatePhoneNumber = (value) => {
        const phoneNumberRegex = /^\+?[0-9()-.\s]{10,}[0-9]$/;
        return phoneNumberRegex.test(value);
    };

    useEffect(() => {
        // Check if all required fields are filled
        if (
            username.trim() &&
            isValidEmail &&
            password &&
            confirmPassword === password &&
            isValidPhoneNumber
        ) {
            setIsSignupFieldsValid(true);
        } else {
            setIsSignupFieldsValid(false);
        }
    }, [username, email, password, confirmPassword, isValidPhoneNumber, isValidEmail, isValidPassword]);

    return (
        <form onSubmit={handleSignUp}>
            {/* username */}
            <div className="mb-2 md:mb-4">
                <label htmlFor="username" className="block text-gray-700">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    className="w-full px-2 md:px-3 py-1 md:py-2 border rounded mt-1"
                    placeholder="John Doe"
                    maxLength={40}
                    minLength={3}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <ErrorMsg
                    msg="Username should be more than 3 letters "
                    isVisible={username.length < 3}
                />
            </div>
            {/* end of username */}
            {/* email */}
            <div className="mb-2 md:mb-4">
                <label htmlFor="email" className="block text-gray-700">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-2 md:px-3 py-1 md:py-2 border rounded mt-1"
                    placeholder="an@efubewuw.bg"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                />
                {!isValidEmail && (<ErrorMsg msg="Please enter a valid email" isVisible={!isValidEmail} />)}
            </div>
            {/* end of email */}
            {/* phone number */}
            <div className="mb-2 md:mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                    Phone:
                </label>
                <PhoneInput
                    country={'gh'}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    inputProps={{
                        required: true,
                    }}
                    inputStyle={{
                        width: '100%',
                        height: '40px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '5px',
                    }}
                />
                {!isValidPhoneNumber && (
                    <p className="text-red-500 text-sm">
                        Please enter a valid phone number
                    </p>
                )}
            </div>
            {/* end of phone number */}
            {/* password */}
            <div className="mb-2 md:mb-4">
                <label htmlFor="password" className="block text-gray-700">
                    Password:
                </label>
                <div className="flex relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="w-full px-2 md:px-3 py-1 md:py-2 border rounded mt-1"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => handlePasswordChange(e.target.value)}
                    />
                    <IconButton
                        Icon={showPassword ? FaRegEyeSlash : FaRegEye}
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-1 top-1 text-gray-500"
                        label={showPassword ? 'Hide password' : 'Show password'}
                        bgColor={colors.curiousBlue}

                    />
                </div>
                <ErrorMsg msg="Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number" isVisible={!isValidPassword} />
            </div>
            {/* end of password */}
            {/* confirm password */}
            <div className="mb-4 md:mb-8">
                <label htmlFor="confirmPassword" className="block text-gray-700">
                    Confirm Password:
                </label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        className="w-full px-2 md:px-3 py-1 md:py-2 border rounded mt-1"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <IconButton
                        Icon={showConfirmPassword ? FaRegEyeSlash : FaRegEye}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-1 top-1 text-gray-500"
                        label={showConfirmPassword ? 'Hide password' : 'Show password'}
                        bgColor={colors.shamrock}
                    />
                </div>
                {password !== confirmPassword && (
                    <ErrorMsg msg="Passwords must match" isVisible={password !== confirmPassword} />
                )}
            </div>
            {/* end of confirm password */}
            {isSignupFieldsValid && <Button
                label="Sign Up"
                color1={colors.shamrock}
                type="submit"
            />}
        </form>
    );
};

export default SignupForm;
