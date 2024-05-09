import React, {useState, useRef, useEffect} from 'react'
import 'animate.css';

// custom imports
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import colors from '../config/colors'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStep, setFormStep] = useState(1)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  const nameErrorRef = useRef(null);
  const emailErrorRef = useRef(null);
  const msgErrorRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if the inputs are empty, return
    if (!formData.name.trim() || !formData.email.trim()) {
      if (!formData.name.trim()) {
        nameRef.current.classList.add('animate__animated', 'animate__shakeX');
        nameErrorRef.current.innerText = 'You must enter a name';
      }
      if (!formData.email.trim()) {
        emailRef.current.classList.add('animate__animated', 'animate__shakeX');
        emailErrorRef.current.innerText = 'You must enter an email';
      }

      // Remove animation class after the animation ends
      setTimeout(() => {
        if(nameRef.current) nameRef.current.classList.remove('animate__animated', 'animate__shakeX');
        if(emailRef.current) emailRef.current.classList.remove('animate__animated', 'animate__shakeX')
        if(nameErrorRef.current) nameErrorRef.current.innerText = 'look';
        if(emailErrorRef.current) emailErrorRef.current.innerText = '';
        
      }, 2000);

      return;
    }
   
    // Move to the next step 
    setFormStep(formStep + 1);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    // Send the message to the server
    if (formData.message.trim() === "") {
      messageRef.current.classList.add('animate__animated', 'animate__shakeX');
      msgErrorRef.current.innerText = 'You must enter a message';
      return
    }
    // Remove animation class after the animation ends
    setTimeout(() => {
      if(msgErrorRef.current){
        msgErrorRef.current.innerText = '';
      }
      if(messageRef.current){
        messageRef.current.classList.remove('animate__animated', 'animate__shakeX');
      }
    }, 2000);

    // Move to the next step
    setFormStep(formStep + 1);
  }

  const goBack = () => {
    // Move back to the previous step
    setFormStep(formStep - 1);
  };

  useEffect(() => {
    if(nameRef.current){
      nameRef.current.focus();
    }
    if(messageRef.current){
      messageRef.current.focus();
    }
  }, [formStep])

  return (
    <>
    <Navbar />
      <main role='main' className='py-10'>
        <div className="container-wrapper p-2">
          <h1 className='text-2xl md:text-3xl text-center uppercase mb-5 text-green-500'>Send us a <span className='text-blue-500'>message</span></h1>
          {/* contact main wrapper box */}
          <div className="w-full sm:w-96 flex items-center h-80 bg-blue-100 mx-auto shadow-sm rounded-md gap-2 overflow-hidden">
            {/* 1st contact form - take name and email */}
            {formStep === 1 && (<form className='w-full h-full min-w-full' onSubmit={handleSubmit}>
              <div className="w-full px-2 py-5 animate__animated animate__bounceInDown" style={{
                background: colors.shamrock
              }}>
                <label htmlFor="name" className="block text-base md:text-lg lg:text-xl font-medium text-white animate__animated animate__bounceInDown" style={{
                  animationDelay: '0.3s'
                }}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base md:text-lg p-1 border-gray-300 rounded-sm"
                  placeholder='John Doe' 
                  ref={nameRef}
                  onChange={handleInputChange}
                  aria-describedby='name-error'
                />
                <span 
                  id="name-error" 
                  ref={nameErrorRef}
                  role='alert'
                  className="sr-only"></span>
              </div>
              <div className="mb-4 w-full px-2 py-5 animate__animated animate__bounceInDown" style={{
                background: colors.curiousBlue,
                animationDelay: '0.6s'
              }}>
                <label htmlFor="email" className="block text-base md:text-lg lg:text-xl font-medium text-white animate__animated animate__bounceInDown" style={{
                  animationDelay: '0.9s'
                }}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base md:text-lg p-1 border-gray-300 rounded-sm" 
                  placeholder='sisurdi@gu.tk'
                  ref={emailRef}
                  onChange={handleInputChange}
                  aria-describedby='email-error'
                />
                <span
                  id="email-error"
                  ref={emailErrorRef}
                  role='alert'
                  className="sr-only"
                ></span>
              </div>
              <Button 
                type="submit"
                label='next'
                color1={colors.shamrock}
              />
            </form>)}
            {/* end of 1st contact box */}
            {/* 2nd contact form - take the actual message*/}
            {formStep === 2 && (<form className='w-full h-full min-w-full' onSubmit={sendMessage}>
              <div className="w-full px-2 py-5 h-3/5 mb-4 animate__animated animate__bounceInDown" style={{
                background: colors.shamrock
              }}>
                <label htmlFor="message" className="block text-base md:text-lg lg:text-xl font-medium text-white animate__animated animate__bounceInDown" style={{
                  animationDelay: '0.3s'
                }}>What's on your mind?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base md:text-lg p-1 border-gray-300 rounded-sm h-[80%]" 
                  placeholder='I want to enquire about...'
                  ref={messageRef}
                  onChange={handleInputChange}
                  aria-describedby='msg-error'
                />
                <span
                  id="msg-error"
                  ref={msgErrorRef}
                  role='alert'
                  className="sr-only"
                ></span>
              </div>
              <div className="w-full flex items-center justify-between p-2">
                <Button
                  type="button"
                  label='back'
                  style={{
                    margin: 0
                  }}
                  color1={colors.cinnabar}
                  color2={colors.buttercup}
                  onClick={goBack}
                />
                <Button 
                  type="submit"
                  label='submit'
                  color1={colors.shamrock}
                />
              </div>
            </form>)}
            {/* end of 2nd contact form */}
            {/* 3rd contact form - thank you message*/}
            {formStep === 3 && (<div className='w-full h-full min-w-full flex flex-col items-center justify-between pb-4'>
              <div className="">
                <div className="px-2 py-5" style={{
                  background: colors.shamrock
                }}>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-center text-white mb-1 animate__animated animate__slideInRight' role='alert'>Thank you for reaching out!</h2>
                </div>
                <div className="w-full py-5" style={{
                  background: colors.curiousBlue
                }}>
                  <p className='text-white text-center animate__animated animate__slideInLeft'>We will reply via your email as soon as possible</p>
                </div>
              </div>
              <Button 
                type="button"
                label='done'
                color1={colors.curiousBlue}
                color2={colors.shamrock}
                onClick={() => setFormStep(1)}
              />
            </div>)}
            {/* end of 3rd contact form*/}
          </div>
          {/* end of contact main wrapper box */}
        </div>
      </main>
    <Footer />
    </>

  )
}

export default ContactPage