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
    url: '/api/bookings',
    data: booking
  })
);



export const deleteBooking = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/bookings'
  })
);
