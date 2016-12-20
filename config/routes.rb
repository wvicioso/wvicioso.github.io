Rails.application.routes.draw do
  root 'index#home'
  get 'project/find', to: 'project#find'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
