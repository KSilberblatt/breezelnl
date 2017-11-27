import React from 'react';
import { Link } from 'react-router-dom';
import SpotDetail from './spot_detail';
import { ProtectedRoute } from '../../util/route_util';

const SpotShow = ({ spot, spotId, fetchSpot }) => {
  const spots = {
    [spotId]: spot
  };
  return(
    <div className="single-spot-show">
      <div className="single-spot-map">
        <Link to="/">Back to Spots Index</Link>
      </div>
      <div className="right-half spot-details">
        <SpotDetail spot={spot} />
      </div>
    </div>
  );
};

export default SpotShow;
