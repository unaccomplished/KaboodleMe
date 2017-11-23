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
    char["body_type"] = 'foo'#'assets/kitten_parts/bodies/'+newTraits.body_type.name+'/'+char.species.name+'.png';
    char["eye_type"] = 'foo'#'assets/kitten_parts/eyes/'+char.eye_color.name+'/'+char.body_type.name+'_'+char.eye_type.name+'.png';
    char["kissiepie"] = 'foo'#'assets/kitten_parts/kissiepie/'+char.kissiepie.name+'/'+char.body_type.name+'_'+char.nose_color.name+'.png';
    char
  end

end
