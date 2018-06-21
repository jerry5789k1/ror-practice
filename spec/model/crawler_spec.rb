require 'rails_helper'

RSpec.describe Crawler, :type => :model do
  describe '.get_data' do
    context 'when parsing finished' do
      subject { Crawler.get_data }
      it 'should return hash' do
        expect(subject).not_to be_empty
        expect(subject).to be_a(Array)
      end
      it 'should have these attributes in hash' do
        subject.map do |data|
          expect(data).to have_key(:stock_code)
          expect(data).to have_key(:stock_name)
          expect(data).to have_key(:stock_company_url)
          expect(data).to have_key(:stock_opening_price)
          expect(data).to have_key(:stock_highest_price)
          expect(data).to have_key(:stock_lowest_price)
          expect(data).to have_key(:stock_closing_yesterday)
          expect(data).to have_key(:stock_closing_today)
          expect(data).to have_key(:stock_volumn)
          expect(data).to have_key(:stock_change)
          expect(data).to have_key(:stock_quote_change)
        end
      end
      it 'should set type as' do
        subject.map do |data|
          expect(data[:stock_code]).to be_kind_of(Integer)
          expect(data[:stock_name]).to be_kind_of(String)
          expect(data[:stock_company_url]).to be_kind_of(String)
          expect(data[:stock_opening_price]).to be_kind_of(Float)
          expect(data[:stock_highest_price]).to be_kind_of(Float)
          expect(data[:stock_lowest_price]).to be_kind_of(Float)
          expect(data[:stock_closing_yesterday]).to be_kind_of(Float)
          expect(data[:stock_closing_today]).to be_kind_of(Float)
          expect(data[:stock_volumn]).to be_kind_of(String)
          expect(data[:stock_change]).to be_kind_of(Float)
          expect(data[:stock_quote_change]).to be_kind_of(String)
        end
      end
    end
  end
end
