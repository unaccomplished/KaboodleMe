require 'rails_helper'
require 'user_helper'

RSpec.describe Api::V1::CharactersController, type: :controller do
  let!(:user) { create(:user) }
  let!(:character) { create(:character, user: user) }

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

    it "updates character with expected attributes" do
      new_name = "NewName"
      character.traits << new_trait
      new_trait = 3
      new_elite_item = 4
      put :update, id: character.id, character: {name: new_name, trait_id: new_trait, elite_item_id: new_elite_item}
      updated_character = JSON.parse(response.body)
      expect(updated_character["id"]).to eq character.id
      expect(updated_character["trait_id"]).to eq character.traits
      expect(updated_character["elite_item_id"]).to eq character.new_elite_item
    end

  end

end
