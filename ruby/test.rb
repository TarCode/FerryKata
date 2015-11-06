require 'test/unit'
require './Car'
require './Ferry'

class CarTest < Test::Unit::TestCase

  def test_color
    puts "Should return car color (red)"
    car = Car.new("red", 2)
    assert_equal("red", car.color)
  end

  def test_passengers
    puts "Should return car passengers (2)"
    car = Car.new("red", 2)
    assert_equal(2, car.passengers)
  end

end

class FerryTest < Test::Unit::TestCase

  def test_cars_allowed
    puts "Should return number of cars allowed"
    ferry = Ferry.new(2, 2)
    assert_equal(2, ferry.people_allowed)
  end

  def test_people_allowed
    puts "Should return number of people allowed"
    ferry = Ferry.new(2, 2)
    assert_equal(2, ferry.people_allowed)
  end

end
