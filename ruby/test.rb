require 'test/unit'
require './Car'

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
