Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' #what is the difference between this and just root?

  namespace :api, defaults: { format: :json } do
    resources :spots, only: [:index, :show]
    resources :bookings, only: [:index, :show]
    resources :reviews, only: [:index, :show]
    resources :users, only: [:create, :index]                 # sign up
    resource :session, only: [:create, :destroy], controller: :session     # log in, log out
  end

  root "static_pages#root"
end
