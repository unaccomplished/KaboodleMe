class AddCharacterToTraits < ActiveRecord::Migration
  def change
    add_reference :traits, :character, index: true, foreign_key: true
  end
end
