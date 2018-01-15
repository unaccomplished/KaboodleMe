class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :traits, :elite_items, :sources

  has_many :traits

  def sources
    p object.traits
    newTraits = object.traits.reduce({}) do |result, t|
      result[t.trait_type] = t.name
      result
    end

    # {
    #   body: 'norm',
    #   species: 'grey'
    # }

    char = Hash.new
    # p newTraits
    char[:body_type] = 'assets/kitten_parts/bodies/'+newTraits["body_type"]+'/'+newTraits["species"]+'.png'
    char[:eye_type] = 'assets/kitten_parts/eyes/'+newTraits["eye_color"]+'/'+newTraits["body_type"]+'_'+newTraits["eye_type"]+'.png';
    char[:kissiepie] = 'assets/kitten_parts/kissiepie/'+newTraits["kissiepie"]+'/'+newTraits["body_type"]+'_'+newTraits["nose_color"]+'.png';
    char
  end

end
