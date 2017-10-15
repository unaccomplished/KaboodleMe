class EliteItem < ActiveRecord::Base
  has_many :character_elite_items
  has_many :characters, :through => :character_elite_items
  has_many :purchases
  has_many :users, :through => :purchases
end
