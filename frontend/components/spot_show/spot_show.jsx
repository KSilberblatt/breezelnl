import React from 'react';
import { Link } from 'react-router-dom';
import SpotDetail from './spot_detail';

class SpotShow extends React.Component{
  constructor( props ) {
    super(props);
    }

  componentDidMount(){
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }
  }

  render(){
    const { spot } = this.props;
    return (
      <div>
        <ul className="spot-list">
          <img className="index-image" src={spot.image_url}/>
          <li>Owner: {spot.user}</li>
          <li>Title: {spot.title}</li>
          <li>Address: {spot.address}</li>
          <li>Category: {spot.category}</li>
          <li>Price: {spot.price}</li>
          <li>Description: {spot.description}</li>
        </ul>
      </div>
    );
  }
}
export default SpotShow;
