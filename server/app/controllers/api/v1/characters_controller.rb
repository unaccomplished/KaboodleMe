class Api::V1::CharactersController < ApplicationController
  def show
    character = Character.where(user: current_user).first
    render json: character, serializer: CharacterSerializer, status: 200
  end

  def create
    character = Character.new(character_params)
    render json: character, serializer: CharacterSerializer, status: 200
  end

  def update
    character = Character.where(user: current_user).first

    # The below line does not work, name is not being updated
    character.update(character_params) if character_params

    if params[:character][:trait_id]
      trait = Trait.find(params[:character][:trait_id])
      character.traits << trait if trait
    end

    if params[:character][:elite_item_id]
      elite_item = EliteItem.find(params[:character][:elite_item_id])
      character.elite_items << elite_item if elite_item
    end

    render json: character, serializer: CharacterSerializer
  end

  private
  def character_params
    params.permit(:name)
  end
end
