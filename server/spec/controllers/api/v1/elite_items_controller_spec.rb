require 'rails_helper'

RSpec.describe Api::V1::EliteItemsController, type: :controller do
  let!(:elite_item) { create(:elite_item) }

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "assigns EliteItem.all to elite_item" do
      get :index
      expect(assigns(:elite_items)).to eq([elite_item])
    end
  end

  describe "GET show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

end
