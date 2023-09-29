class ChangeTimeToInteger < ActiveRecord::Migration[7.0]
  def up
    change_column :tasks, :time, :integer
  end
  
  def down
    change_column :tasks, :time, :string
  end
end
