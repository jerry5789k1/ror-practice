require 'nokogiri'
require 'pry'
require 'open-uri'

class WebCrawler < ActiveRecord::Base
  #  attr_accessible :stock_change, 
  #                  :stock_closing_price_today, 
  #                  :stock_closing_price_yesterday, 
  #                  :stock_code, 
  #                  :stock_company_url, 
  #                  :stock_day_high, 
  #                  :stock_day_low, 
  #                  :stock_name, 
  #                  :stock_opening_price, 
  #                  :stock_quote_change,
  #                  :stock_volume
  # attr_accessible :title, :body
    def self.craw_stocks_turnover_data_from_web
      unparsed_url = open('https://stock.wearn.com/qua.asp')
      .read.force_encoding('big5')
      .encode!('utf-8', undef: :replace, replace: '?', invalid: :replace) # encode chinese character from garbled
      parsed_page = Nokogiri::HTML(unparsed_url) #parsing webdata 

      table = parsed_page.css('.stockalllistbg2, stockalllistbg1')
      stocks = table.map do |rows|
        cells = rows.css('td')
        stock_code = cells[1].text.strip
        stock_name = cells[2].text.strip
        stock_company_url = cells[2].css('a')[0]['href'].strip
        stock_opening_price = cells[3].text.strip.to_f
        stock_day_high = cells[4].text.strip.to_f
        stock_day_low = cells[5].text.strip.to_f
        stock_closing_price_yesterday = cells[6].text.strip.to_f
        stock_closing_price_today = cells[7].text.strip.to_f 
        stock_volume = cells[8].text.strip[/[0-9|\,]+/].to_s
        fonts = cells[9].css("font")
        stock_change = if !fonts.empty? && fonts[1]['color'] == '#ec008c'
                          fonts[1].text.strip.to_f
                        elsif !fonts.empty? && fonts[1]['color'] == '#009900'
                          -fonts[1].text.strip.to_f
                        else 
                          0.0
                        end
        stock_quote_change = cells[12].text.split('%')[0].to_f
        {
          stock_code: stock_code,
          stock_name: stock_name,
          stock_company_url: stock_company_url,
          stock_opening_price: stock_opening_price,
          stock_day_high: stock_day_high,
          stock_day_low: stock_day_low,
          stock_closing_price_yesterday: stock_closing_price_yesterday,
          stock_closing_price_today: stock_closing_price_today,
          stock_volume: stock_volume,
          stock_change: stock_change,
          stock_quote_change: stock_quote_change,
        }
      end
      stocks.first(50)
    end
    
    def self.save_stocks_turnover_data(stocks_data=[])
        stocks_data.each do |stock|
          Turnover.create(stock)
        end
    end

    def self.remove_old_stocks_turnover_data
      Turnover.where(created_at: Time.now.beginning_of_day..Time.now.end_of_day).destroy_all
    end

    def self.update_new_stocks_turnover_data_to_db
       remove_old_stocks_turnover_data
       save_stocks_turnover_data(craw_stocks_turnover_data_from_web)
    end
end
