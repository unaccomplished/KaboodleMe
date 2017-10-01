class AddTraitToCharacters < ActiveRecord::Migration
  def change
    add_reference :characters, :trait, index: true, foreign_key: true
  end
end
