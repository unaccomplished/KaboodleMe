class Api::V1::CharactersController < ApplicationController
  def show
    p Character.all
    character = Character.find(user: current_user )
    render json: character, serializer: CharacterSerializer, status: 200
  end

  def update
    character = Character.find(user: current_user)
    if character.update_attributes(character_params)
      render json: character, serializer: CharacterSerializer, status: 200
    else
      render json: {error: "Character update failed", status: 400}, status: 400
    end
  end

  private
  def character_params
    params.permit(:name, :trait_id, :elite_items_id)
  end
end
