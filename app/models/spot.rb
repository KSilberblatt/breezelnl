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

class Spot < ApplicationRecord
  validates :owner_id, :address, :category, :title, :image_url, :price, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    primary_key: :id,
    class_name: :User
  has_many :reviews
  has_many :bookings
end
