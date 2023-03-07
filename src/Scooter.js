const User = require('./User');
const ScooterApp = require('./ScooterApp');

class Scooter{
  // scooter code here
  constructor(station) {
    this.station = station;
    this.scooterStations = [];
  }

  rent(user){
    if (this.charge >= 20 && this.isBroken != true) {
      this.user = user;
      this.station = null;
    }else if (this.charge < 20) {
      throw new Error('Scooter needs to charge');
    }else if (this.isBroken == true) {
      throw new Error('Scooter needs repair');
    };
  }; 
  dock(station){
    if (this.stations in scooterStation == false) {
      throw new Error('No such station exists.');
    };
    if (scooter in station.scooters == true) {
      throw new Error('Scooter is already at this station.');
    };
  }; 
};


module.exports = Scooter
