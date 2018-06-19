class ChangeVolumnToBeString < ActiveRecord::Migration
  def up
  end

  def down
  end

  def change
      change_column :turnovers, :stock_volumn, :string
  end
end
