class AddHiddenPropertyToTask < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :hidden, :boolean, :default => false
  end
end
