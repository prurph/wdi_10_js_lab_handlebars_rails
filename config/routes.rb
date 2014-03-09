Wdi10JsLabTemplates::Application.routes.draw do
  get 'profile', to: 'profiles#show'
  get 'reference', to: 'profiles#reference'
  root to: 'profiles#show'
end
