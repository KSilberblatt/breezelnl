class Api::SpotsController < ApplicationController
  def index
    spots = Spot.all
    @spots = spots #filter here later
    render json: @spots
  end

  def show
    @spot = Spot.find(params[:id])
  end
end
