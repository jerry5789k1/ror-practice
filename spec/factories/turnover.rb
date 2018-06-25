FactoryBot.define do
  factory :turnover do
    stock_code '2340'
    stock_name '光磊'
    stock_company_url '"https://stock.wearn.com/a2340.html"'
    stock_opening_price '34.2'
    stock_highest_price '36.5'
    stock_lowest_price '32.9'
    stock_closing_yesterday '33.4'
    stock_closing_today '33.25'
    stock_volumn '"129,823"'
    stock_change '-0.15'
    stock_quote_change '"-0.45"'
  end
end
