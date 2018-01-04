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
        trait = Trait.where(trait_type: t[:trait_type], name: t[:name]).first
        # Instead of this:
        # First find the trait with trait.type that exists on the characters array and remove it
        # code here to find and remove trait
        # then add the new trait to the character
        # character.traits << trait if trait
      end
    end

    # if params[:elite_items]
      # elite_item = EliteItem.find(params[:character][:elite_item_id])
      #character.elite_items << elite_item if elite_item
    #end

    render json: character, serializer: CharacterSerializer
  end

  private
  def character_params
    params.permit(:name)
  end
end
