import React, { Component } from 'react';
import City from './City';

class CityList extends Component {
  render() {
    const cityArray = this.props.cities.map((city, key) => {
      return <City name={city.name} country={city.country} key={key} />
    })
    return (
      <div id='citylist' class="col s12 m4 l3">
          <h4>Cities</h4>
          {cityArray}
      </div>
    );
  }
}

export default CityList;
