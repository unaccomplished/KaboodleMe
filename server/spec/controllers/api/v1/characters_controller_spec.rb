require 'rails_helper'

RSpec.describe Api::V1::CharactersController, type: :controller do
  let(:user) { create(:user) }
  let!(:character) { create(:character, user: user) }

  # describe "GET #show" do
  #   it "returns http success" do
  #     get :show
  #     expect(response).to have_http_status(:success)
  #   end
  # end
  #
  # describe "GET #update" do
  #   it "returns http success" do
  #     get :update
  #     expect(response).to have_http_status(:success)
  #   end
  # end

end
