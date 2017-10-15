class Character < ActiveRecord::Base
  belongs_to :user
  has_many :character_elite_items
  has_many :elite_items, :through => :character_elite_items
  has_many :character_traits
  has_many :traits, :through => :character_traits
end
