require 'rails_helper'

RSpec.describe Api::V1::EliteItemsController, type: :controller do
  let!(:elite_item) { create(:elite_item) }

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

end
