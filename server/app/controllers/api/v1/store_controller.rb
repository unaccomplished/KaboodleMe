class Api::V1::StoreController < ApplicationController
  def buy
    @elite_item = EliteItem.where(params[:id]).first
    current_user.elite_items << @elite_item
    render json: {
      elite_items: current_user.elite_items
      }, serializer: EliteItemsSerializer
  end

  def sell
    @elite_item = EliteItem.where(params[:id]).first
    current_user.elite_items.delete(@elite_item) #Maybe use destory
    render json:{
      elite_items: current_user.elite_items
      }, serlializer: EliteItemsSerializer
  end

end
