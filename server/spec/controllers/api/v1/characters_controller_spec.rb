require 'rails_helper'

RSpec.describe Api::V1::CharactersController, type: :controller do
  let!(:user) { create(:user) }
  let!(:character) { create(:character, user: user) }

  def authenticate_user user
    auth_headers = user.create_new_auth_token
    request.headers.merge!(auth_headers)
  end

  before do
    authenticate_user user
  end

  describe "GET #show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #update" do
    it "returns http success" do
      get :update
      expect(response).to have_http_status(:success)
    end
  end

end
