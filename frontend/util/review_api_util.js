export const fetchReviews = () => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews'
  })
);

export const fetchReview = id => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`
  })
);

export const createReview = data => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  })
);

export const postReview = (review) => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: review
  })
);

export const edit = (review) => (
  $.ajax({
    method: 'PATCH',
    url: '/api/reviews/' + review.id,
    data: review
  })
);



export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: '/api/reviews/' + id
  })
);
