var assert = require("assert");
var Car = require('./Car');
var Ferry = require('./Ferry');

describe('Car Class', function(){
    var car = new Car("red", 2);
    var fakeCar = {color: "red", passengers: 2};
    it('should create new car instance', function (done) {
      assert.deepEqual(car, fakeCar);
      done();
    });
});
