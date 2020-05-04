const User = require('../models/user');
const setupDB = require('./test-setup')

setupDB.setupDB('test');

test('password does not save plain-text', async done=> {
    const newuser = new User('testing@test.com', 'password')
    await newuser.save();
    const user = await User.findOne({email: 'testing@test.com'})
    expect(user.password).not.toBe("password")

    done()
})