const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user
describe('registerUser', () => {
    test('should add new user if they are not already registered and are 18 or older', () => {
      const user = ScooterApp.registerUser('fatima', 'basicpass123', 24);
      expect(ScooterApp.users.length).toEqual(1);
      expect(ScooterApp.users[0]).toEqual(user);
    });
    test('should throw an error if the user is already registered', () => {
        ScooterApp.registerUser('fatima', 'basicpass123', 24);
        expect(ScooterApp.registerUser('fatima', 'basicpass123', 24).toThrow('User already registered'));
    });
  
    test('should throw an error if the user is too young to register', () => {
        expect(ScooterApp.registerUser('fatima', 'basicpass123', 17));
    });
});    
// log in

// log out

// rent scooter

// dock scooter
