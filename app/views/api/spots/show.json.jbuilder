@reviews.each do |review|
  json.set! review.id do
    json.partial! 'review', review: review
  end
end
json.partial! '/api/spots/spot', spot: @spot
