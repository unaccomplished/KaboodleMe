class Api::V1::EliteItemsController < ApplicationController
  def index
    elite_items = EliteItem.all
    p elite_items
    render json: elite_items, each_serializer: EliteItemsSerializer
  end

  def show
    elite_item = EliteItem.where(params[:id]).first
    render json: elite_item, serializer: EliteItemsSerializer
  end
end
