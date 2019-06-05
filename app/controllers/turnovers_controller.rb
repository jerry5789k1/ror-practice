class TurnoversController < ApplicationController
    def index
    end

    def show
       WebCrawler.update_new_stocks_turnover_data_to_db
       @turnovers = Turnover.all
       render json: @turnovers
    end

    def filter
       @turnovers = Turnover.filter_turnover_record(params[:date],params[:code])
       #@turnovers = @turnovers.to_json.gsub(/\\u([0-9a-z]{4})/){|s| [$1.to_i(16)].pack("U")} #解碼中文
       render json: @turnovers
    end
end
