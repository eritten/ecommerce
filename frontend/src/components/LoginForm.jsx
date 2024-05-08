import React from 'react';

import Button from '../components/Button'

const LoginForm = ({ toggleLoginForm }) => {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded mt-1"
          placeholder="Enter your email"
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
      <Button
        label="Login"
        color1="#4dc0b5"
        color2='#41a098' 
      />
    </form>
  );
};

export default LoginForm;
