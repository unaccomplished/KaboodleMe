class CreateCharacterTraits < ActiveRecord::Migration
  def change
    create_table :character_traits do |t|

      t.integer :character_id
      t.integer :trait_id

      t.timestamps null: false
    end
  end
end
