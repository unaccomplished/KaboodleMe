class Api::V1::CharactersController < ApplicationController
  def show
    character = Character.where(user: current_user ).first
    render json: character, serializer: CharacterSerializer, status: 200
  end

  def update
    p Character.all
    character = Character.where(user: current_user).first
    if character.update_attributes(character_params)
      render json: character, serializer: CharacterSerializer, status: 200
    else
      render json: {error: "Character update failed", status: 400}, status: 400
    end
  end

  private
  def character_params
    params.permit(:name, :trait_id, :elite_item_id)
  end
end
