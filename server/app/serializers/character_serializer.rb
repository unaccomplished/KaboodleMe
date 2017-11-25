class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :traits, :elite_items, :sources

  def sources
    newTraits = traits.reduce do |result, t|
      result[t.trait_type] = t.name
    end

    # {
    #   body: 'norm',
    #   species: 'grey'
    # }

    char = Hash.new
    char["body_type"] = 'assets/kitten_parts/bodies/'+newTraits.body_type.name+'/'+newTraits.species.name+'.png';
    char["eye_type"] = 'assets/kitten_parts/eyes/'+newTraits.eye_color.name+'/'+newTraits.body_type.name+'_'+newTraits.eye_type.name+'.png';
    char["kissiepie"] = 'assets/kitten_parts/kissiepie/'+newTraits.kissiepie.name+'/'+newTraits.body_type.name+'_'+newTraits.nose_color.name+'.png';
    char
  end

end
