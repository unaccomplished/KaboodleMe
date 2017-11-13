class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :traits, :elite_items

  # def traits
  #   {
  #     body_type: DEFAULT_BODY,
  #     species: DEFAULT_SPECIES,
  #     eye_type: DEFAULT_EYE_TYPE,
  #     eye_color: DEFAULT_EYE_COLOR,
  #     kissiepie: DEFAULT_KISSIEPIE,
  #     nose_color: DEFAULT_NOSE_COLOR
  #   };
  # end
end
