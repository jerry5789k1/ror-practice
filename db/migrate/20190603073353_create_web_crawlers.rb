class CreateWebCrawlers < ActiveRecord::Migration
  def change
    create_table :web_crawlers do |t|

      t.timestamps
    end
  end
end
