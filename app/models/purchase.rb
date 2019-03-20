class Purchase < ActiveRecord::Base
  belongs_to :user
  belongs_to :elite_item
end
