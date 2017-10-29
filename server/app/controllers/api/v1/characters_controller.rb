class Api::V1::CharactersController < ApplicationController
  def show
    character = Character.where(user: current_user).first
    render json: character, serializer: CharacterSerializer, status: 200
  end

  def update
    character = Character.where(user: current_user).first
    trait = Trait.find(params[:id])
    elite_item = EliteItem.find(params[:id])

    params.each do |key, value|
      if trait
        character.traits << trait
      elsif elite_item
        character.elite_items << elite_item
      else
        character.update_attributes(character_params)
      end
    end
    render json: {
      character: character.traits
    }, serializer: CharacterSerializer
    # if character.update_attributes(character_params)
    #   render json: character, status: 200
    # else
    #   render json: {error: "Character update failed", status: 400}, status: 400
    # end
  end

  private
  def character_params
    params.permit(:name)
  end
end
