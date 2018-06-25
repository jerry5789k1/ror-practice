require 'rails_helper'

RSpec.describe Turnover, type: :model do
  before(:all) do
    @turnover = create(:turnover)
  end
  it 'should set type as' do
    expect(@turnover[:stock_code]).to be_kind_of(Integer)
    expect(@turnover[:stock_name]).to be_kind_of(String)
    expect(@turnover[:stock_company_url]).to be_kind_of(String)
    expect(@turnover[:stock_opening_price]).to be_kind_of(Float)
    expect(@turnover[:stock_highest_price]).to be_kind_of(Float)
    expect(@turnover[:stock_lowest_price]).to be_kind_of(Float)
    expect(@turnover[:stock_closing_yesterday]).to be_kind_of(Float)
    expect(@turnover[:stock_closing_today]).to be_kind_of(Float)
    expect(@turnover[:stock_volumn]).to be_kind_of(String)
    expect(@turnover[:stock_change]).to be_kind_of(Float)
    expect(@turnover[:stock_quote_change]).to be_kind_of(String)
  end
end