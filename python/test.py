import unittest
from Car import Car
from Ferry import Ferry

class TestCar(unittest.TestCase):

  def test_color(self):
      car = Car("red", 1)
      self.assertEqual(car.color, 'red')

  def test_passengers(self):
      car = Car("blue", 3)
      self.assertEqual(car.passengers, 3)

class TestFerry(unittest.TestCase):
    def test_carsAllowed(self):
        ferry = Ferry(2,4)
        self.assertEqual(ferry.cars_allowed, 2)

    def test_peopleAllowed(self):
        ferry = Ferry(3,4)
        self.assertEqual(ferry.people_allowed, 4)

    def test_board_accept(self):
        car = Car("red",4)
        ferry = Ferry(3,4)
        self.assertEqual(ferry.board(car), "Accepted")

    def test_board_reject(self):
        car = Car("blue", 4)
        ferry = Ferry(1,2)
        self.assertEqual(ferry.board(car), "Rejected")

    def test_carCount(self):
        car = Car("red",4)
        ferry = Ferry(3,4)
        ferry.board(car)
        self.assertEqual(ferry.car_count, 1)

    def test_peopleCount(self):
        car = Car("red",4)
        ferry = Ferry(3,4)
        ferry.board(car)
        self.assertEqual(ferry.people_count, 4)    

if __name__ == '__main__':
    unittest.main()
