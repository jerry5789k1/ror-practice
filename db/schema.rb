# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20190604015205) do

  create_table "trunovers", :force => true do |t|
    t.string   "stock_code"
    t.string   "stock_name"
    t.string   "stock_company_url"
    t.float    "stock_opening_price"
    t.float    "stock_day_high"
    t.float    "stock_day_low"
    t.float    "stock_closing_price_yesterday"
    t.float    "stock_closing_price_today"
    t.string   "stock_volume"
    t.float    "stock_change"
    t.float    "stock_quote_change"
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  create_table "turnovers", :force => true do |t|
    t.integer  "stock_code"
    t.string   "stock_name"
    t.string   "stock_company_url"
    t.integer  "stock_opening_price"
    t.integer  "stock_day_high"
    t.integer  "stock_day_low"
    t.integer  "stock_closing_price_today"
    t.integer  "stock_closing_price_yesterday"
    t.integer  "stock_volume"
    t.integer  "stock_change"
    t.integer  "stock_quote_change"
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  create_table "web_crawlers", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
