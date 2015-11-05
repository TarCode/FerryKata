class Ferry(object):
    def __init__(self, cars_allowed, people_allowed):
        self.cars_allowed = cars_allowed
        self.people_allowed = people_allowed
        self.car_count = 0
        self.people_count = 0

    def board(self, car):
            if self.cars_allowed >= 1 and self.people_allowed >= car.passengers:
                self.car_count = self.car_count + 1
                self.people_count = self.people_count + car.passengers
                return "Accepted"
            else:
                return "Rejected"
