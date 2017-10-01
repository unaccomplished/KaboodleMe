class Character < ActiveRecord::Base
  belongs_to :user
  has_many :traits
  has_many :elite_items
end
