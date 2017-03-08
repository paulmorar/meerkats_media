Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  resources :cases, only: [:index, :show]
  resources :about, only: :index
  resources :contact, only: :index
  resources :price, only: :index
end
