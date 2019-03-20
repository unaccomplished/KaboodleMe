require 'rails_helper'

RSpec.describe Character, type: :model do
  let(:user) { create(:user) }
  let!(:character) { create(:character, user: user) }
  let!(:old_trait) { create(:trait, name: "foo", trait_type: "body_type") }
  let!(:new_trait) { create(:trait, name: "bar", trait_type: "body_type") }

  it { is_expected.to belong_to(:user) }
  it { is_expected.to have_many(:traits) }
  it { is_expected.to have_many(:elite_items) }

  it "replaces the trait correctly" do
    character.update_trait(old_trait)
    character.update_trait(new_trait)
    expect(character.traits.count).to eq(1)
  end
end
