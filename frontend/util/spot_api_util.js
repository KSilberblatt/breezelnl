export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: 'api/spots'
  })
);

export const fetchSpot = id => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${id}`
  })
);

export const createSpot = data => (
  $.ajax({
    method: 'POST',
    url: 'api/spots',
    data
  })
);
