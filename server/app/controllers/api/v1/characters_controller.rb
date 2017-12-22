class Api::V1::CharactersController < ApplicationController
  def index
    character = Character.where(user: current_user).first
    if(!character)
      character = Character.new(character_params)
    end
    render json: character, serializer: CharacterSerializer, status: 200
  end

  def show
  end

  def create
  end

  def update
    character = Character.where(user: current_user).first
    # The below line does not work, name is not being updated
    # character.update(character_params) if character_params

    if params[:traits]
      params[:traits].each do |t|
        # Needs refactoring, find a better way
        trait = Trait.where(trait_type: t[:trait_type], name: t[:name]).first
        # Problem: Every time we run the update funciton we add new traits to the optionsList
        # which means this list gets linearly larger, doubles every time we update
        # Best way to update a models list association
        character.traits << trait if trait
      end
    end

    if params[:elite_items]
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
