class Api::V1::StoreController < ApplicationController
  def buy
    # @character = Character.where(user: current_user)
    @elite_item = EliteItem.find(params[:id])
    current_user.elite_items << @elite_item
    render json: {
      elite_items: current_user.elite_items
      }, serializer: EliteItemsSerializer
  end

  def sell
    # @character = Character.where(user: current_user)
    @elite_item = EliteItem.find(params[:id])
    current_user.elite_items.delete(@elite_item) #Maybe use destory
    render json:{
      elite_items: current_user.elite_items
      }, serlializer: EliteItemsSerializer
  end

end
