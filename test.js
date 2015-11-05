var assert = require("assert");
var Car = require('./Car');
var Ferry = require('./Ferry');

describe('Car Class', function(){
    var car = new Car("red", 2);
    var fakeCar = {color: "red", passengers: 2, trip_count: 0};
    it('should create new car instance', function (done) {
      assert.deepEqual(car, fakeCar);
      done();
    });
});

describe('Ferry Class', function(){

    it('should create new ferry instance', function (done) {
      var ferry = new Ferry(2, 8);
      assert.deepEqual(ferry.cars_allowed, 2);
      assert.deepEqual(ferry.people_allowed, 8);
      done();
    });

    it('should return accepted if car boards ferry', function (done) {
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      assert.equal(ferry.board(car), "Accepted");
      done();
    });

    it('should update car trip_count', function (done) {
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      ferry.board(car);
      assert.equal(car.trip_count, 1);
      done();
    });

    it('should update people_count in ferry instance', function (done) {
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      ferry.board(car);
      assert.deepEqual(ferry.people_count, 1);
      done();
    });

    it('should update car_count in ferry instance', function (done) {
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      ferry.board(car);
      assert.deepEqual(ferry.car_count, 1);
      done();
    });

    it('should update car colors when car boards a ferry', function (done) {
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      ferry.board(car);
      assert.deepEqual(ferry.car_colors, {"red":1});
      done();
    });

    it('should return rejected if ferry reached maximum cars', function (done) {
      var ferry = new Ferry(0, 1);
      var car = new Car("red", 1);
      assert.equal(ferry.board(car), "Rejected");
      done();
    });


    it('should unboard a ferry', function (done) {
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      ferry.board(car);
      assert.equal(ferry.unBoard(car),"Unboarded Ferry");
      done();
    });

    it('should update car_count when car unboards a ferry', function (done) {
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      ferry.board(car);
      assert.equal(ferry.car_count, 1);
      ferry.unBoard(car)
      assert.equal(ferry.car_count, 0);
      done();
    });

    it('should update people_count when car unboards a ferry', function (done) {
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      ferry.board(car);
      assert.equal(ferry.people_count, 1);
      ferry.unBoard(car)
      assert.equal(ferry.people_count, 0);
      done();
    });




});
