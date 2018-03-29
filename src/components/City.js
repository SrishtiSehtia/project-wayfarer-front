import React, { Component } from 'react';


class City extends Component {
  render() {
    return (
      <div className='city' key={this.props.key}>
        <h3>{this.props.name}</h3>
        <h4>{this.props.country}</h4>

      </div>
    );
  }
}

export default City;
