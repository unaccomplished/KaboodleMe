class Api::V1::StoreController < ApplicationController
  def buy
    @character = Character.find(user_id: current_user)
    @elite_item = EliteItem.find(params[:id])
    @character.elite_items << @elite_item
    render json: elite_item, serializer: EliteItemsSerializer
  end

  def sell
    @character = Character.find(user_id: current_user)
    @elite_item = EliteItem.find(params[:id])
    @character.elite_items.delete(@elite_item)
    render json: elite_item, serlializer: EliteItemsSerializer
  end

end
