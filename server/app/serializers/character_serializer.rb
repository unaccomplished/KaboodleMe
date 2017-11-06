class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name,:traits, :elite_items
end
