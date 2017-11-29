export const book = (booking) => (
  $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: booking
  })
);

export const edit = (booking) => (
  $.ajax({
    method: 'PATCH',
    url: '/api/bookings/' + booking.id,
    data: booking
  })
);



export const deleteBooking = (id) => (
  $.ajax({
    method: 'DELETE',
    url: '/api/bookings/' + id
  })
);
