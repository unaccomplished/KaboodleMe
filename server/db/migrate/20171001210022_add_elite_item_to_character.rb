class AddEliteItemToCharacter < ActiveRecord::Migration
  def change
    add_reference :characters, :elite_items, index: true, foreign_key: true
  end
end
