class Api::V1::EliteItemsController < ApplicationController
  def index
    elite_items = EliteItem.all
    render json: elite_items, each_serializer: EliteItemsSerializer
  end

  # def show
  #   elite_item = EliteItem.find(params[:id])
  #   render json: elite_items, serializer: EliteItemsSerializer
  # end
end
