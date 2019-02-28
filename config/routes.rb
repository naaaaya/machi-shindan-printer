Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'top#index'
  get   '/top', to: 'top#index'
  post  '/top', controller: 'top', action: 'print', as: 'result_print'
end
