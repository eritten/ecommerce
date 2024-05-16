import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// custom imports
import colors from '../config/colors';
import ErrorMsg from '../components/ErrorMsg';
import LoadingCircle from '../assets/animation/LoadingCircle';
import {useEmail} from '../context/EmailProvider'
import { useToken } from '../context/TokenProvider';

const CodeVerifyPage = ({}) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { email } = useEmail();
    const { setToken, setIsAuthenticated } = useToken();

    // Focus on the first input field when the component mounts
    useEffect(() => {
        document.getElementById('code0').focus();
    }, []);

    const handleChange = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Move focus to the next input field if a number is entered
        if (value && index < code.length - 1) {
            document.getElementById(`code${index + 1}`).focus();
        }
    };

    const handleBackspace = (index, event) => {
      if (event.key === 'Backspace' && index > 0 && !code[index]) {
          const newCode = [...code];
          newCode[index - 1] = '';
          setCode(newCode);
          document.getElementById(`code${index - 1}`).focus();
      }
  };

  const handleSubmitCode = () => {
    setLoading(true);

    axios.post('http://localhost:80/users/verify', { email: email, verificationCode: code.join('') }).then((res) => {
      const authToken = res?.data?.token;
      setToken(authToken);
      setIsAuthenticated(true);

      // store the token in local storage
      localStorage.setItem('token', authToken);

      // navigate to the dashboard
      navigate('/dashboard');
    }).catch((err) => {
      setLoading(false);
      setError(err?.response?.data?.error);
    }).finally(() => {
      setCode(['', '', '', '', '', '']);
      setLoading(false);
    });
  }

  // if all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit)) {
      handleSubmitCode();
    } 
  } , [code]);

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{
          background: colors.curiousBlue
        }}>
          <LoadingCircle
            visible={loading}
          />
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Enter Verification Code</h2>
            <p className="text-lg mb-8 text-center">An email has been sent to: <strong className='text-white text-xl'>{email}</strong></p>
            <div className="flex justify-center mb-6">
                {code.map((digit, index) => (
                    <input
                        key={index}
                        id={`code${index}`}
                        type="text"
                        maxLength={1}
                        className="w-8 h-8 md:w-12 md:h-12 text-base md:text-2xl border rounded-md text-center mx-1 md:mx-2"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleBackspace(index, e)}
                    />
                ))}
            </div>
            <ErrorMsg
              msg={error}
              isVisible={error !== null}
              className="text-center font-bold text-xl md:text-2xl bg-red-100 py-1 px-3 rounded-sm"
            />
        </div>
    );
};

export default CodeVerifyPage;
