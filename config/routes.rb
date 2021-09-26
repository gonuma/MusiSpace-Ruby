Rails.application.routes.draw do
  resources :friends
  devise_for :users
#  get 'pages/profile'
 root 'pages#index'
 
  namespace :api do
    namespace :v1 do
      resources :songs, param: :slug
      resources :comments, only: [:show, :create, :destroy]
      resources :friends, only: [:show, :create, :destroy]
    end
  end

end
