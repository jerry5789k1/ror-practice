class Turnover < ActiveRecord::Base
  attr_accessible :stock_change, :stock_closing_price_today, :stock_closing_price_yesterday, :stock_code, :stock_company_url, :stock_day_high, :stock_day_low, :stock_name, :stock_opening_price, :stock_quote_change, :stock_volume
end
