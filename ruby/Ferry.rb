class Ferry
  attr_reader :cars_allowed
  attr_reader :people_allowed

   def initialize(cars_allowed, people_allowed)
      @cars_allowed=cars_allowed
      @people_allowed=people_allowed
   end
end
