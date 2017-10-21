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
  end

  describe "GET #sell" do
    it "returns http success" do
      get :sell
      expect(response).to have_http_status(:success)
    end
  end

end
