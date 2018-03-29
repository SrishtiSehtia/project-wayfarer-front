import React, { Component } from 'react';


class City extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <h2>{this.props.name}</h2>
        <h4>{this.props.country}</h4>

      </div>
    );
  }
}

export default City;
