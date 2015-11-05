var assert = require("assert");
var Car = require('./Car');
var Ferry = require('./Ferry');

var fakeCar = {color: "red", passengers: 2, trip_count: 0};
var fakeCar2 = {color: "yellow", passengers: 2, trip_count: 0};

var fakeFerry  = { cars_allowed: 2,
                  people_allowed: 8,
                  people_count: 2,
                  car_count: 1,
                  board: "Accepted",
                  notBoard: "Rejected",
                  unBoard: "Unboarded Ferry",
                  car_colors : {red : 1, yellow : 1}
                };





describe('Car Class', function(){
    var car = new Car("red", 2);
    var fakeCar = {color: "red", passengers: 2, trip_count: 0};
    it('should create new car instance', function (done) {
      assert.deepEqual(car, fakeCar);
      done();
    });
});

describe('Ferry Class', function(){
    var ferry = new Ferry(2, 8);
    var boarded = ferry.board(fakeCar);

    it('should create new ferry instance', function (done) {
      assert.deepEqual(fakeFerry.cars_allowed, ferry.cars_allowed);
      assert.deepEqual(fakeFerry.people_allowed, ferry.people_allowed);
      done();
    });

    it('should return accepted if car boards ferry', function (done) {
      assert.equal(fakeFerry.board, boarded);
      done();
    });

    it('should update car trip_count', function (done) {
      assert.equal(fakeFerry.board, boarded);
      done();
    });

    it('should update people_count in ferry instance', function (done) {
      assert.deepEqual(fakeFerry.people_count, ferry.people_count);
      done();
    });

    it('should update car_count in ferry instance', function (done) {
      assert.deepEqual(fakeFerry.car_count, ferry.car_count);
      done();
    });

    it('should update car colors when car boards a ferry', function (done) {
      var boarded = ferry.board(fakeCar2);
      assert.deepEqual(ferry.car_colors, fakeFerry.car_colors);
      done();
    });

    it('should return rejected if ferry is full', function (done) {
      var boarded = ferry.board(fakeCar2);
      var boarded = ferry.board(fakeCar);
      assert.equal(boarded, fakeFerry.notBoard);
      done();
    });


    it('should unboard a ferry', function (done) {
      var unBoarded = ferry.unBoard(fakeCar);
      assert.equal(unBoarded, fakeFerry.unBoard);
      done();
    });

    it('should update car_count when car unboards a ferry', function (done) {
      var unBoarded = ferry.unBoard(fakeCar);
      assert.equal(ferry.car_count, fakeFerry.car_count );
      done();
    });

    it('should update people_count when car unboards a ferry', function (done) {
      var unBoarded = ferry.unBoard(fakeCar);
      assert.equal(ferry.people_count, fakeFerry.people_count);
      done();
    });




});
