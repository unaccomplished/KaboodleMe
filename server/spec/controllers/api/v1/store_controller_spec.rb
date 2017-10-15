require 'rails_helper'

RSpec.describe Api::V1::StoreController, type: :controller do
  let!(:user) { create(:user) }
  let!(:character) { create(:character, user: user) }
  let!(:elite_item) { create(:elite_item) }

  def authenticate_user user
    auth_headers = user.create_new_auth_token
    request.headers.merge!(auth_headers)
  end

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
