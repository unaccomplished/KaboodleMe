require 'rails_helper'

RSpec.describe EliteItem, type: :model do
  let(:user) { create(:user) }
  let!(:elite_item) { create(:elite_item)}

  it { is_expected.to have_many(:characters) }
  it { is_expected.to have_many(:users) }
end
