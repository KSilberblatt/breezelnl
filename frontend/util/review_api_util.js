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



export const deleteBooking = (id) => (
  $.ajax({
    method: 'DELETE',
    url: '/api/reviews/' + id
  })
);
