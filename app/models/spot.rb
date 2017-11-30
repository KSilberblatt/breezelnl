class Spot < ApplicationRecord
  validates :owner_id, :address, :category, :title, :image_url, :price, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    primary_key: :id,
    class_name: :User
  has_many :reviews
  has_many :bookings
end
