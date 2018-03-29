import React, { Component } from 'react';
import CityList from '../components/CityList';
import CityView from '../components/CityView';

class CitiesContainer extends Component {
  render(){
    return (
      <div class="row">
        <CityList cities={this.props.cities}/>
        <CityView posts={this.props.posts}/>
      </div>
    );
  }
}

export default CitiesContainer;
