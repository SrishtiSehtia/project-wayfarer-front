import React, { Component } from 'react';
import CityList from './CityList';
import CityView from './CityView;'

class CitiesContainer extends Component {
  render(){
    return (
      <div class="row">
        <CityList cities={cities}/>
        <CityView />
      </div>
    );
  }
}

export default CitiesContainer;
