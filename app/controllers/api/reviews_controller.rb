class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render "api/spots/:spot_id"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    reviews = Review.all
    @reviews = reviews #filter here later
    render json: @reviews
  end

  def show
    @review = Review.find(params[:id])
  end

  private

  def review_params
    params.require(:review).permit(
      :user_id, :spot_id, :start_date, :end_date)
  end
end
