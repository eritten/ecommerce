const nodemailer = require('nodemailer');

// Function to generate a random verification code
const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
};

// Function to send verification code to an email address
const sendVerificationCode = async (email, subject, htmlContent, verificationCode) => {
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
        subject: subject,
        html: htmlContent.replace('${verificationCode}', verificationCode)
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

const sendSignupVerificationCode = async (email) => {
    const subject = 'Falaa Account Verification Code';
    const verificationCode = generateVerificationCode(); // Generate verification code
    const htmlContent = `
        <p>Dear User,</p>
        <p>Your Falaa account verification code is:</p>
        <h2>${verificationCode}</h2>
        <p>Please use this code to verify your account.</p>
        <p>Regards,<br/>Falaa Team</p>
    `;
    return sendVerificationCode(email, subject, htmlContent, verificationCode); // Pass verification code to send function
};

const sendPasswordResetVerificationCode = async (email) => {
    const subject = 'Falaa Password Reset Verification Code';
    const verificationCode = generateVerificationCode(); // Generate verification code
    const htmlContent = `
        <p>Dear User,</p>
        <p>You have requested to reset your password for your Falaa account.</p>
        <p>Your password reset code is:</p>
        <h2>${verificationCode}</h2>
        <p>Please use this code to reset your password.</p>
        <p>If you didn't request this, you can safely ignore this message.</p>
        <p>Regards,<br/>Falaa Team</p>
    `;
    return sendVerificationCode(email, subject, htmlContent, verificationCode); // Pass verification code to send function
};

module.exports = {
    generateVerificationCode,
    sendVerificationCode,
    sendSignupVerificationCode,
    sendPasswordResetVerificationCode
};
