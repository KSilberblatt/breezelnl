class Spot < ApplicationRecord
  validates :owner_id, :address, :category, :title, :image_url, :price, presence: true

  belongs_to :user, foreign_key: :owner_id
  has_many :reviews
  has_many :bookings
end
