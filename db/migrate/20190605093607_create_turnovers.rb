class CreateTurnovers < ActiveRecord::Migration
  def change
    create_table :turnovers do |t|
      t.string :stock_code
      t.string :stock_name
      t.string :stock_company_url
      t.float :stock_opening_price
      t.float :stock_day_high
      t.float :stock_day_low
      t.float :stock_closing_price_yesterday
      t.float :stock_closing_price_today
      t.string :stock_volume
      t.float :stock_change
      t.float :stock_quote_change

      t.timestamps
    end
  end
end
