Rails.application.routes.draw do
  root 'index#home'

  get 'connect', to: 'index#connect'
  get 'projects', to: 'index#projects'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
