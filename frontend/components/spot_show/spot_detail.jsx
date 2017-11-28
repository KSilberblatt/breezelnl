import React from 'react';
import { Link } from 'react-router-dom';

class SpotDetail extends React.Component{
  constructor(props){
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
    const { user, title, address, category,
      price, description, image_url } = this.props;
    return (
      <div>
        <ul className="spot-list">
          <img className="index-image" src={image_url}/>
          <li>Owner: {user}</li>
          <li>Title: {title}</li>
          <li>Address: {address}</li>
          <li>Category: {category}</li>
          <li>Price: {price}</li>
          <li>Description: {description}</li>
        </ul>
      </div>
    );
  }
}
export default SpotDetail;
