class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :traits, :elite_items, :sources

  has_many :traits

  def sources
    newTraits = object.traits.reduce({}) do |result, t|
      result[t.trait_type] = t.name
      result
    end

    # {
    #   body: 'norm',
    #   species: 'grey'
    # }

    char = Hash.new
    p newTraits
    body_type=newTraits[:body][:name]
    species=newTraits.species.name
    string = 'assets/kitten_parts/bodies/'+body_type+'/'+species+'.png'
    char[:body_type] = string
    # char["eye_type"] = 'assets/kitten_parts/eyes/'+newTraits.eye_color.name+'/'+newTraits.body_type.name+'_'+newTraits.eye_type.name+'.png';
    # char["kissiepie"] = 'assets/kitten_parts/kissiepie/'+newTraits.kissiepie.name+'/'+newTraits.body_type.name+'_'+newTraits.nose_color.name+'.png';
    char
  end

end
