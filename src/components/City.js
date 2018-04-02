import React, { Component } from 'react';


class City extends Component {

  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
  //  var y = this.props.populateCityView()
    var x = this.props.city;
    this.props.populateCityView(this.props.city)
  }
  render() {
    return (
      <div className='city' onClick={this.handleClick} key={this.props.key}>
        <h5>{this.props.name}</h5>
        <h6>{this.props.country}</h6>
      </div>
    );
  }
}

export default City;
