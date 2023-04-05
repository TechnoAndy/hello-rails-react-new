module Api
  class GreetingsController < ApplicationController
    def index
      count_greetings = Greeting.count
      random_offset = rand(count_greetings)
      greetings = Greeting.offset(random_offset).first
      render json: greetings
    end
  end
end