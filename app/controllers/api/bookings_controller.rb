class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render "api/spots"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def index
    bookings = Booking.all
    @bookings = bookings #filter here later
    render json: @bookings
  end

  def show
    @booking = Booking.find(params[:id])
  end

  private

  def booking_params
    params.require(:booking).permit(
      :user_id, :spot_id, :start_date, :end_date)
  end
end
