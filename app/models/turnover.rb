class Turnover < ActiveRecord::Base
  attr_accessible :stock_change, :stock_closing_price_today, :stock_closing_price_yesterday, :stock_code, :stock_company_url, :stock_day_high, :stock_day_low, :stock_name, :stock_opening_price, :stock_quote_change, :stock_volume
  def self.get_all_dates 
      dates = Turnover.select("strftime('%d-%m-%Y', created_at) AS date").uniq.map do |date|
          date
      end
  end 

  def self.get_all_stock_codes
      Turnover.select('DISTINCT stock_code').order(:stock_code)
  end

  def self.filter_by_code(code)
      Turnover.where(stock_code: code)
  end 

  def self.filter_by_date(date)
      Turnover.where(created_at: date.to_time.beginning_of_day..date.to_time.end_of_day)
  end 
  
  def self.filter_turnover_record(date, code) 
      Turnover.where(created_at: date.to_time.beginning_of_day..date.to_time.end_of_day, stock_code:code)
  end 
end
