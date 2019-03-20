class CharacterEliteItem < ActiveRecord::Base
  belongs_to :character
  belongs_to :elite_item
end
