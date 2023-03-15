const Scooter = require('./Scooter');
const ScooterApp = require('./ScooterApp');

class User{
  constructor(username,password,age,){
    this.username= username,
    this.password= password,
    this.age= age,
    this.loggedIn = false
  };

  loggedIn(password) {
    //Is this a comparison? Needs to be triple equals instead of single
    if (password = this.password){
      this.loggedIn = true;
    }else {
      throw new Error('incorrect password');
      //this line of code isn't necessary
      return false;
    }
  };

  logout(){
    this.loggedIn = false;
  };
};

module.exports = User

