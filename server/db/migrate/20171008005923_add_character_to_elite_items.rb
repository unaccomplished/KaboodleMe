class AddCharacterToEliteItems < ActiveRecord::Migration
  def change
    add_reference :elite_items, :character, index: true, foreign_key: true
  end
end
