class Turnover < ActiveRecord::Base
  attr_accessible :stock_change, :stock_closing_price_today, :stock_closing_price_yesterday, :stock_code, :stock_company_url, :stock_day_high, :stock_day_low, :stock_name, :stock_opening_price, :stock_quote_change, :stock_volume
  def self.get_all_dates 
    Turnover.select('DISTINCT created_at')
  end 

  def self.get_all_stock_codes
      Turnover.select('stock_code').order(:stock_code)
  end

  def self.filter_turnover_record(date = nil, code = nil)
    if code.nil?
      Turnover.where(created_at: date.to_time.beginning_of_day..date.to_time.end_of_day)
    elsif date.nil?
      Turnover.where(stock_code: code)
    else 
      Turnover.where(created_at: date.to_time.beginning_of_day..date.to_time.end_of_day, stock_code:code)
    end
  end 
end
