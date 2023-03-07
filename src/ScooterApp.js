const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  // ScooterApp code here
  constructor(station){
    this.registeredUsers = [{}];
    this.Serial = serial.nextSerial
    nextSerial = while i>0{
      i++
    }
    charge =100
    isBroken = false

  }

  registerUser(username,password,age){
    if( username in registeredUsers == false && age >= 18){
      const user = new User(username, password, age);
      this.registeredUsers.push(user);
      console.log("User has been registered")
      return user;
    }else if (username in registeredUsers ==true ){
      throw new Error("already registered");

    }else if (age < 18){
      throw new Error("too young to register");
    }
  }

  loginUser(username,password){
    if( username in registeredUsers === true){
      username.loggedIn(password);
      if(this.loggedIn(password)== true){
        console.log('User has been logged in.')
        return true
      };
    };
    if (this.username in registeredUsers === false || loggedIn(password) == false){
      throw new Error("Username or password is incorrect")
    };
  };

  logoutUser(username){
    if (loginUser(username) == true){
      username.logout();
      console.log("user is logged out")
    };
    if (loginUser(username) != true){
      throw new Error('no such user is logged in');
  }
  createScooter(station){
    const scooter = new Scooter(station);
    station.addScooter(scooter);
    return scooter;
  };

  dockScooter(scooter, station) {
    dock(station);
    station.addScooter(scooter);
    console.log('Scooter is docked.');
  };

  rentScooter(scoooter,user){
    scooter.rent(user);
    console.log(`Scooter ${scooter.serial} is rented`);
  }
  // print(){}
});

module.exports = ScooterApp
