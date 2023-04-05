class Greetings < ActiveRecord::Migration[7.0]
  def change
    drop_table :greetings
  end
end
