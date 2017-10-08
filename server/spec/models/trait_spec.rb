require 'rails_helper'

RSpec.describe Trait, type: :model do
  it { is_expected.to belong_to(:character) }
end
