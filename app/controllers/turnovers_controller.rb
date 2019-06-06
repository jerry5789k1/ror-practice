class TurnoversController < ApplicationController
    def index
    end

    def show
       WebCrawler.update_new_stocks_turnover_data_to_db
       @turnovers = Turnover.last(50)
       @turnovers = @turnovers.to_json.gsub(/\\u([0-9a-z]{4})/){|s| [$1.to_i(16)].pack("U")}
       render json: @turnovers
    end

    def filter
       @turnovers = Turnover.filter_turnover_record(params[:date],params[:code])
       @turnovers = @turnovers.to_json.gsub(/\\u([0-9a-z]{4})/){|s| [$1.to_i(16)].pack("U")}
       render json: @turnovers
    end

    def get_all_dates 
        @turnovers = Turnover.get_all_dates
        render json: @turnovers
    end

    def get_all_codes
        @turnovers = Turnover.get_all_stock_codes
        render json: @turnovers
    end 

    def sort
        case params[:sort_type]
            when 'STOCK_CODE'
                @turnovers = Turnover.last(50).sort_by(&:stock_code)
            when 'STOCK_NAME'
                @turnovers = Turnover.last(50).sort_by(&:stock_name)
            when 'STOCK_OPENING_PRICE'
                @turnovers = Turnover.last(50).sort_by(&:stock_opening_price)
            when 'STOCK_DAY_HIGH'
                @turnovers = Turnover.last(50).sort_by(&:stock_day_high) 
            when 'STOCK_DAY_LOW'
                @turnovers = Turnover.last(50).sort_by(&:stock_day_low)
            when 'STOCK_CLOSING_PRICE_YES'
                @turnovers = Turnover.last(50).sort_by(&:stock_closing_price_yesterday)
            when 'STOCK_CLOSING_PRICE_TODAY'
                @turnovers = Turnover.last(50).sort_by(&:stock_closing_price_today)
            when'STOCK_VOLUME'
                @turnovers = Turnover.last(50).sort_by(&:stock_volume)
            when'STOCK_CHANGE'
                @turnovers = Turnover.last(50).sort_by(&:stock_change)
            when'STOCK_QUOTE_CHANGE'
                @turnovers = Turnover.last(50).sort_by(&:stock_quote_change)
            when 'RANK'
                @turnovers = Turnover.last(50)
        end 
        @turnovers = @turnovers.to_json.gsub(/\\u([0-9a-z]{4})/){|s| [$1.to_i(16)].pack("U")}
        render json: @turnovers
    end 
end
