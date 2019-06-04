class TurnoversController < ApplicationController
    def index
    end

    def show
       WebCrawler.update_new_stocks_turnover_data_to_db
       @turnovers = Turnover.all
       binding.pry
    end
end
