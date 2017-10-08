class Api::V1::CharactersController < ApplicationController
  def show
    character = Character.find(params[:user_id])
    render json: character, serializer: CharacterSerializer, status: 200
  end

  def update
    #  set a trait or elite item
    character = Character.find(params[:user_id])
    if character.update_attributes(character_params)
      render json: character, serializer: CharacterSerializer, status: 200
    else
      render json: {error: "Character update failed", status: 400}, status: 400
    end
  end

  private
  def character_params
    params.permit(:user_id, :name)
  end
end
