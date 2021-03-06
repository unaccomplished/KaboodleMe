require 'rails_helper'

RSpec.describe Api::V1::TraitsController, type: :controller do
  let!(:trait) { create(:trait) }

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "assigns Trait.all to trait" do
      get :index
      resp = JSON.parse(response.body)
      # traits = JSON.parse([trait])
      p resp
      expect(resp).to eq(
        trait.name => [{"name"=>trait.name}]
        )
    end
  end

  # describe "GET show" do
  #   it "returns http success" do
  #     get :show
  #     expect(response).to have_http_status(:success)
  #   end
  # end

end
