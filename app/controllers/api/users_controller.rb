class Api::UsersController < ApplicationController
  def create
    user = User.new(user_params[:email], user_params[:password])
    if user.save!
      login(user)
      #redirect or render json
    else
      #throw errors
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
