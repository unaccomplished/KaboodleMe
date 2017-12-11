class Api::V1::TraitsController < ApplicationController
  def index
    traits = Trait.all
    p traits
    newTraits = traits.reduce({}) do |result, t|
      if result[t.trait_type].is_a?(Array)
        result[t.trait_type] << {name: t.name}
      else
        result[t.trait_type] = []
        result[t.trait_type] << {name: t.name}
      end
      result
    end
    render json: newTraits
  end

end
