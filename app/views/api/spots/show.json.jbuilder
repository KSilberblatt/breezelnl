json.partial! '/api/spots/spot', spot: @spot
json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user, :spot, :rating, :description
    end
  end

end
