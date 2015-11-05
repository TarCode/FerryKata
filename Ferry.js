
function Ferry(cars_allowed, people_allowed){
  this.cars_allowed = cars_allowed;
  this.people_allowed = people_allowed;
  this.people_count = 0;
  this.car_count = 0;
  this.car_colors = {};

  this.board = function(car){
      if(this.people_allowed > this.people_count && this.car_count < this.cars_allowed){
        if(this.car_colors[car.color] === undefined){
          this.car_colors[car.color] = 0;

        }
        this.car_colors[car.color]++;
        this.car_count++;
        this.people_count = this.people_count + car.passengers;
        car.trip_count += 1;
        return "Accepted";
      }
      else{
        return "Rejected";
      }
    }

    this.unBoard = function(car){
        if(this.car_count >= 1 && this.people_count > car.passengers){
          this.car_count--;
          this.people_count = this.people_count - car.passengers;
          return "Unboarded Ferry";
        }
        else{
          return "No cars on ferry";
        }
    }

  }



module.exports = Ferry;
