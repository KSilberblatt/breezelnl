class Api::SpotsController < ApplicationController
  def index
    spots = Spot.all
    @spots = spots #filter here later
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
  end
end
