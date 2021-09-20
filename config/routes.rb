Rails.application.routes.draw do
 root 'pages#index'
 
  namespace :api do
    namespace :v1 do
      resources :songs, param: :slug
      resources :comments, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
