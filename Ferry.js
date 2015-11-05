
function Ferry(cars_allowed, people_allowed){
  this.cars_allowed = cars_allowed;
  this.people_allowed = people_allowed;
  this.people_count = 0;
  this.car_count = 0;

  this.board = function(car){
      if(car.passengers < (this.people_allowed - this.people_count) && this.car_count < this.cars_allowed){
        this.car_count++;
        this.people_count = this.people_count + car.passengers;
        return "Accepted";
      }
      else{
        return "Rejected";
      }
    }
  }
module.exports = Ferry;
