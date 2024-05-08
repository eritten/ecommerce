import React, { useState } from 'react';

import LoginForm from '../components/LoginForm'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import colors from '../config/colors';
import Button from '../components/Button';

const SignupPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Function to toggle between showing signup and login forms
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md bg-green-100 p-8 rounded shadow-lg">
          <h2 className="text-2xl mb-4">{showLoginForm ? 'Login' : 'Sign Up'}</h2>
          {showLoginForm ? (
            <LoginForm />
          ) : (
            <SignupForm toggleLoginForm={toggleLoginForm} />
          )}
          <p className="text-center mt-4">
            {showLoginForm ? "Don't have an account? " : "Already have an account? "}
            <button
              className="text-blue-500 underline"
              onClick={toggleLoginForm}
            >
              {showLoginForm ? 'Sign up' : 'Login'}
            </button>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Signup form component
const SignupForm = ({ toggleLoginForm }) => {

  const handleSignUp = (e) => {
    e.preventDefault()
    console.log('Sign up form submitted')
  }
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username:</label>
        <input
          type="text"
          id="username"
          className="w-full px-3 py-2 border rounded mt-1"
          placeholder="John Doe"
          maxLength={40}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded mt-1"
          placeholder="an@efubewuw.bg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border rounded mt-1"
          placeholder="Enter your password"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full px-3 py-2 border rounded mt-1"
          placeholder="Confirm your password"
        />
      </div>
      <Button 
        label="Sign Up"
        color1={colors.shamrock}
        type="submit"
        onClick={handleSignUp}
      />
    </form>
  );
};

export default SignupPage;
