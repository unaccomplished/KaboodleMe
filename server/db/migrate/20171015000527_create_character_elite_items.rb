class CreateCharacterEliteItems < ActiveRecord::Migration
  def change
    create_table :character_elite_items do |t|

      t.integer :character_id
      t.integer :elite_items_id

      t.timestamps null: false
    end
  end
end
