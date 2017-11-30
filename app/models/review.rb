# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  spot_id     :integer          not null
#  rating      :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :user_id, :spot_id, :rating, presence: true
  belongs_to :user
  belongs_to :spot

end
