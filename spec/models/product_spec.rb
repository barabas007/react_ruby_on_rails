require 'rails_helper'

RSpec.describe Product, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
  it { should validate_presence_of :title }
  it { should validate_presence_of :price }
  it { should have_many(:galleries)}

  it { should have_many(:related_products) }
  it { should have_many(:related) }
end
