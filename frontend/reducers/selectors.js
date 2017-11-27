export const selectSpot = ({ spots }, id) => {
   const spot = spots[id] || {};
   return spot;
};

export const asArray = ({ spots }) => {
  return Object.keys(spots).map(key => spots[key]);
};
