Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' #what is the difference between this and just root?

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]                 # sign up
    resources :session, only: [:create, :destroy]     # log in, log out
  end

#  root "static_pages#root"
end
