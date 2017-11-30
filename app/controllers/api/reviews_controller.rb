class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all #filter here later
    render :index
  end

  def show
    @review = Review.find_by(id: params[:id])
    @user = User.where(id: @review.user_id)
    render json:[@user, @review]
  end

  private

  def review_params
    params.require(:review).permit(
      :user_id, :spot_id, :rating, :description)
  end

end
