class User < ActiveRecord::Base
  # Include default devise modules.
  # :lockable, :timeoutable
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :character
  has_many :purchases
  has_many :elite_items, :through => :purchases
  after_commit :create_character, on: :create

  def create_character
    Character.create!(user: self)
  end
end
