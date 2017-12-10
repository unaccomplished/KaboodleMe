class Api::V1::TraitsController < ApplicationController
  def index
    traits = Trait.all
    p traits
    render json: traits, each_serializer: TraitsSerializer
  end

end
