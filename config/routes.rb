StockApiServer::Application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  resources :board, only: [:index, :show] do
  end
  # API routes
  namespace 'api' do
    namespace 'v1' do
      resources :stocks, only: [:index] do
        get 'sort', on: :collection
      end
    end
  end

  root :to => 'board#index'
end
