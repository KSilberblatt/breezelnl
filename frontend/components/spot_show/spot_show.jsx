import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="spot-index">
        <div className="index-image">
          <img src={spot.image_url}/>
        </div>
        <div className="below-image">
          <div className="description-feed">
            <ul className="spot-nav-bar">
              <li><a>Overview</a></li>
              <li><a>Reviews</a></li>
              <li><a>The Host</a></li>
              <li><a>Location</a></li>
            </ul>
            <ul className="spot-overview">
              <li><h1>{spot.title}</h1></li>
              <li><h2>{spot.category}</h2></li>
              <li><p>{spot.description}</p></li>
            </ul>
          </div>
          <div className="booking-form">

          </div>
        </div>
      </div>
    );
  }
}
export default SpotShow;
