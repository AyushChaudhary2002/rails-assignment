Rails.application.routes.draw do
  devise_for :users
  resources :tasks
  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
    get 'sign_up', to: 'devise/registrations#new'
  end
  root 'tasks#index'
  get 'task/:id/hide', to: 'tasks#hidden', as: 'hide/task'
end
