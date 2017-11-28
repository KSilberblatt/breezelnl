import React from 'react';
import { Link } from 'react-router-dom';
import SpotDetail from './spot_detail';

class SpotShow extends React.Component{
  constructor( props ) {
    super(props);
    this.state = {
      spot: props.fetchSpot(props.id)
    };

  }

  render(){
    return(
      <div className="single-spot-show">
        <div className="single-spot-map">
          <Link to="/">Back to Spots Index</Link>
        </div>
        <div className="right-half spot-details">
          <SpotDetail spot={this.state.spot} />
        </div>
      </div>
    );
  }
}
export default SpotShow;
