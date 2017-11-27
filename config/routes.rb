Rails.application.routes.draw do

  namespace :api do
    get 'spots/index'
  end

  namespace :api do
    get 'spots/show'
  end

  get 'spots/index'

  get 'spots/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root' #what is the difference between this and just root?

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]                 # sign up
    resource :session, only: [:create, :destroy], controller: :session     # log in, log out
  end

#  root "static_pages#root"
end
