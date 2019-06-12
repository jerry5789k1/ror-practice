class TurnoversController < ApplicationController
    def index
       @turnovers = Turnover.last(50)
       render :json => @turnovers
    end

    def crawl 
        WebCrawler.update_new_stocks_turnover_data_to_db
    end 

    def filter_or_sort
        sorting_data_type = {
            'STOCK_CODE' => :stock_code,
            'STOCK_NAME' => :stock_name,
            'STOCK_OPENING_PRICE' => :stock_opening_price,
            'STOCK_DAY_HIGH' => :stock_day_high,
            'STOCK_DAY_LOW' => :stock_day_low,
            'STOCK_CLOSING_PRICE_YES' => :stock_closing_price_yesterday,
            'STOCK_CLOSING_PRICE_TODAY' => :stock_closing_price_today,
            'STOCK_VOLUME' => :stock_volume,
            'STOCK_CHANGE' => :stock_change,
            'STOCK_QUOTE_CHANGE' => :stock_quote_change,
        }
        case params[:action_type]
            when 'SORTING'
                if params[:sort_type]
                    @turnovers = Turnover.last(50).sort_by(&sorting_data_type[params[:sort_type]])
                else
                    @turnovers = Turnover.last(50)
                end
            else
                if params[:date] && params[:code]
                    @turnovers = Turnover.filter_turnover_record(params[:date],params[:code])
                elsif params[:date]
                    @turnovers = Turnover.filter_by_date(params[:date])
                elsif params[:code]
                    @turnovers = Turnover.filter_by_code(params[:code])
                else
                    @turnovers = Turnover.last(50) 
                end
        end
        render :json => @turnovers
    end 

    def get_all_dates 
        @turnovers = Turnover.get_all_dates
        render json: @turnovers
    end

    def get_all_codes
        @turnovers = Turnover.get_all_stock_codes
        render json: @turnovers
    end 
end
