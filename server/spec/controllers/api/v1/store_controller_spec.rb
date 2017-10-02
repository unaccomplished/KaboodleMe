require 'rails_helper'

RSpec.describe Api::V1::StoreController, type: :controller do

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
