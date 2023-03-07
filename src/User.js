const Scooter = require('./Scooter');
const ScooterApp = require('./ScooterApp');

class User{
  constructor(username,password,age,){
    this.username= username,
    this.password= password,
    this.age= age,
    this.loggedIn = false
  };

  loggedIn(password){
    if (password = this.password){
      this.loggedIn = true;
    }else {
      throw new Error('incorrect password');
      return false;
    }
  };

  logout(){
    this.loggedIn = false;
  };
};

module.exports = User

