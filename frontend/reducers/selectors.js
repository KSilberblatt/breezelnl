export const selectSpot = ({ spots }, id) => {
   const spot = spots[id] || {};
   return spot;
};
export const selectReview = ({ reviews }, id) => {
   const review = reviews[id] || {};
   return review;
};
export const selectBooking = ({ bookings }, id) => {
   const booking = bookings[id] || {};
   return booking;
};

export const asArray = ({ spots }) => {
  return Object.keys(spots).map(key => spots[key]);
};
