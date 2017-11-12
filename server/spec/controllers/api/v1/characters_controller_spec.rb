require 'rails_helper'
require 'user_helper'

RSpec.describe Api::V1::CharactersController, type: :controller do
  let!(:user) { create(:user) }
  let!(:character) { create(:character, user: user) }
  let!(:trait) { create(:trait) }
  let!(:elite_item) { create(:elite_item) }

  before do
    authenticate_user user
  end

  describe "GET #show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST create" do
    let(:new_character) { create(:character, user: user) }

    it "increases the number of characters by 1" do
      expect{ post :create, character: new_character}.to change(Character,:count).by(1)
    end
  end

  describe "PUT #update" do
    it "returns http success" do
      put :update, id: character.id, character: {name: 'foo'}
      expect(response).to have_http_status(:success)
    end

    it "updates character with expected attributes" do
      new_name = "NewName"
      new_trait = trait
      new_elite_item = elite_item
      put :update, id: character.id, character: {name: new_name, trait_id: new_trait, elite_item_id: new_elite_item}
      updated_character = JSON.parse(response.body)

      expect(updated_character["name"]).to eq new_name
      expect(updated_character["traits"].first["id"]).to eq new_trait.id
      expect(updated_character["elite_items"].first["id"]).to eq new_elite_item.id
    end

  end

end
