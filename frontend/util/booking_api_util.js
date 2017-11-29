export const fetchBookings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings'
  })
);

export const fetchBooking = id => (
  $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`
  })
);

export const createBooking = data => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data
  })
);

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
