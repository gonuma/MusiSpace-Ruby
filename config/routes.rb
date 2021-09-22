Rails.application.routes.draw do
  devise_for :users
 get 'pages/newAcc'
 get 'pages/login'
 root 'pages#index'
 
  namespace :api do
    namespace :v1 do
      resources :songs, param: :slug
      resources :comments, only: [:create, :destroy]
    end
  end

end
