require 'rails_helper'

RSpec.describe Character, type: :model do
  let(:user) { create(:user) }
  let(:character) { Character.create!(user: user) }

  it { is_expected.to belong_to(:user) }
  it { is_expected.to have_many(:traits) }
  it { is_expected.to have_many(:elite_items) }
end
