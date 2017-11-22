class Api::UsersController < ApplicationController
  def create
    user = User.find_by_credentials(user_params[:email], user_params[:password])
    if user.save!
      
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
