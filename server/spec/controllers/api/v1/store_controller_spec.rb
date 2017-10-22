require 'rails_helper'
require 'user_helper'

RSpec.describe Api::V1::StoreController, type: :controller do
  let!(:user) { create(:user) }
  let!(:elite_item) { create(:elite_item) }

  before do
    authenticate_user user
  end

  describe "GET #buy" do
    it "returns http success" do
      get :buy
      expect(response).to have_http_status(:success)
    end

    it "adds elite_item to current_user.elite_items" do
      put :buy, elite_item_id: elite_item.id, user_id: user.id
      expect(user.elite_items).size.should_be 1
    end
  end

  describe "GET #sell" do
    it "returns http success" do
      get :sell
      expect(response).to have_http_status(:success)
    end

    it "destroys elite_item from current_user.elite_items" do
      put :buy, elite_item_id: elite_item.id, user_id: user.id
      expect(user.elite_items).size.should_be 0
    end
  end

end
