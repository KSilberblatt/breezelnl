import React from 'react';
import { Link } from 'react-router-dom';


const SpotDetail = ({ spot }) => {
  return (
    <div>
      <ul className="spot-list">
        <img className="index-image" src={spot.picture_url}/>
        <li>Owner: {spot.user}</li>
        <li>Title: {spot.title}</li>
        <li>Address: {spot.address}</li>
        <li>Category: {spot.category}</li>
        <li>Price: {spot.price}</li>
        <li>Description: {spot.description}</li>
      </ul>
    </div>
  );
};

export default SpotDetail;
