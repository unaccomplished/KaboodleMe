require 'rails_helper'

RSpec.describe Trait, type: :model do
  let!(:trait) { create(:trait) }

  it { is_expected.to belong_to(:character) }
end
