export const fetchSpots = data => (
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    data
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
