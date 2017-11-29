class Booking < ApplicationRecord
  validates :user_id, :spot_id, :start_date, :end_date, presence: true

  belongs_to :user
  belongs_to :spot

end
