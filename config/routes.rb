Rails.application.routes.draw do
  resources :exercises
  resources :workouts
  resources :stats
  scope '/api' do
    resources :users
  end
end
