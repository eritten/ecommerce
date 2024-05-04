const nodemailer = require('nodemailer');

// Function to generate a random verification code
const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
};

// Function to send verification code to an email address
const sendVerificationCode = async (email) => {
    // Generate a verification code
    const verificationCode = generateVerificationCode();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'eritten.gyau@amalitech.com',
            pass: 'rzlxbnhutwzlpahe'
        }
    });

    // Define email options
    const mailOptions = {
        from: 'Falaa <eritten.gyau@amalitech.com>',
        to: email,
        subject: 'Falaa Account Verification Code',
        html: `
      <p>Dear User,</p>
      <p>Your Falaa account verification code is:</p>
      <h2>${verificationCode}</h2>
      <p>Please use this code to verify your account.</p>
      <p>Regards,<br/>Falaa Team</p>
    `
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification code sent successfully.');
        return verificationCode;
    } catch (error) {
        console.error('Error sending verification code:', error);
        throw new Error('Failed to send verification code');
    }
};

module.exports = {
    generateVerificationCode,
    sendVerificationCode
};
