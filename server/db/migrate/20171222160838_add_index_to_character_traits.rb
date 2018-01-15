class AddIndexToCharacterTraits < ActiveRecord::Migration
  def change
    add_index :character_traits, [:character_id, :trait_id], unique: true
  end
end
