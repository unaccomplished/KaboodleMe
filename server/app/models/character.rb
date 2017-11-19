class Character < ActiveRecord::Base
  belongs_to :user
  has_many :character_elite_items
  has_many :elite_items, :through => :character_elite_items
  has_many :character_traits
  has_many :traits, :through => :character_traits

  before_save :set_defaults

  def set_defaults
    trait = Trait.where(trait_type: 'body').first
    character.traits << trait if trait
    trait = Trait.where(trait_type: 'species').first
    character.traits << trait if trait
    trait = Trait.where(trait_type: 'eye').first
    character.traits << trait if trait
    trait = Trait.where(trait_type: 'eye_color').first
    character.traits << trait if trait
    trait = Trait.where(trait_type: 'kissiepie').first
    character.traits << trait if trait
    trait = Trait.where(trait_type: 'nose_color').first
    character.traits << trait if trait
  end
end
