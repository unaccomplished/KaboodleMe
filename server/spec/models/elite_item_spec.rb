require 'rails_helper'

RSpec.describe EliteItem, type: :model do
  let(:user) { create(:user) }
  let!(:elite_item) { create(:elite_item)}
  
  it { is_expected.to belong_to(:character) }
  # it { is_expected.to have_many(:purchases) }
  it { is_expected.to have_many(:users) }
end
