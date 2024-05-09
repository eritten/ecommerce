import React, { useState, useEffect } from 'react';

import LoginForm from '../components/LoginForm'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Function to toggle between showing signup and login forms
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  // Scroll to top when component mounts or updates
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen py-5 sm:py-10">
        <div className="w-full max-w-md bg-green-100 p-8 rounded shadow-lg">
          <h2 className="text-2xl mb-4">{showLoginForm ? 'Login' : 'Sign Up'}</h2>
          {showLoginForm ? (
            <LoginForm />
          ) : (
            <SignupForm />
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

export default SignupPage;
