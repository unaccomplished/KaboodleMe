class Character < ActiveRecord::Base
  belongs_to :user
  has_many :character_elite_items
  has_many :elite_items, :through => :character_elite_items
  has_many :character_traits
  has_many :traits, :through => :character_traits

  before_save :set_defaults

  def set_defaults
    body = Trait.where(trait_type: 'body').first
    species = Trait.where(trait_type: 'species').first
    eye_type = Trait.where(trait_type: 'eye_type').first
    eye_color = Trait.where(trait_type: 'eye_color').first
    kissiepie = Trait.where(trait_type: 'kissiepie').first
    nose_color = Trait.where(trait_type: 'nose_color').first
    self.traits.push *[body,species,eye_type,eye_color,kissiepie,nose_color]
  end
end
