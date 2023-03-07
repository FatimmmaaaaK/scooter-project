const User = require('../src/User')

// User tests here
// test username
describe("testing user class",()=>{
    test("User is created and can be registered",()=>{
        const newUser = new User('Fatimak', "basicpass123", 24);

        expect(newUser.username).toBe('Fatimak');
        expect(newUser.password).toBe('basicpass123');
        expect(newUser.age).toBe(24);
        expect(newUser.loggedIn).toBe(false);
        });

    test('should set loggedIn to true if the password is correct', () => {
        user.login('basicpass123');
        expect(user.loggedIn).toBe(true);
        });
    test('should throw an error if the password is incorrect', () => {
        expect(user.login('basicpass124')).toThrow('Incorrect password');
        expect(user.loggedIn).toBe(false);
    });

    test('should set loggedIn to false', () => {
        user.login('basicpass123');
        expect(user.loggedIn).toBe(true);
        user.logout();
        expect(user.loggedIn).toBe(false);
    });
});
