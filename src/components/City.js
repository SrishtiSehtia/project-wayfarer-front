import React, { Component } from 'react';


class City extends Component {
  render() {
    return (
      <div className='city' key={this.props.key}>
        <img id="thumbnailLeft" src="../images/thumbnail.jpg" alt='thumbnail' />
        <section>
          <h5>{this.props.name}</h5>
          <h6>{this.props.country}</h6>
        </section>
      </div>
    );
  }
}

export default City;
