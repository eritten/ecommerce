const request = require('supertest');
const app = require('../index');
const sequelize = require('../core/init_db');

// Clean up the database after tests
afterAll(async () => {
    await sequelize.close();
});

describe('POST /signup', () => {
    test('should create a new user', async () => {
        // Define test data
        const userData = {
            email: 'test@example.com',
            password: 'TestPassword123!',
            firstname: 'John',
            lastname: 'Doe',
            telephone: '1234567890',
        };

        // Send POST request to signup endpoint
        const response = await request(app)
            .post('/users/signup')
            .send(userData)
            .set('Accept', 'application/json');

        // Check response status code and data
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'User signed up successfully');
        expect(response.body).toHaveProperty('user');
        expect(response.body.user).toHaveProperty('id');
        expect(response.body.user).toHaveProperty('email', userData.email);
        expect(response.body.user).toHaveProperty('firstname', userData.firstname);
        expect(response.body.user).toHaveProperty('lastname', userData.lastname);
        expect(response.body.user).toHaveProperty('telephone', userData.telephone);
    });

    test('should return 401 if email already exists', async () => {
        // Define test data with an existing email
        const existingUserEmail = 'eritten2@gmail.com';
        const userData = {
            email: existingUserEmail,
            password: 'TestPassword123!',
            firstname: 'Jane',
            lastname: 'Doe',
            telephone: '9876543210',
        };

        // Send POST request to signup endpoint
        const response = await request(app)
            .post('/signup')
            .send(userData)
            .set('Accept', 'application/json');

        // Check response status code and error message
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('error', 'Email already exists');
    });


});
