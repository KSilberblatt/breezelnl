# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  owner_id    :string           not null
#  address     :string           not null
#  category    :string           not null
#  title       :string           not null
#  price       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_url   :string
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
