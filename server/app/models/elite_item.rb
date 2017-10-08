class EliteItem < ActiveRecord::Base
  belongs_to :character
  has_many :purchases
  has_many :users, :through => :purchases
end
