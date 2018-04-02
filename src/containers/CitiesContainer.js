import React, { Component } from 'react';
import CityList from '../components/CityList';
import CityView from '../components/CityView';
import CityModel from '../models/City'

class CitiesContainer extends Component {
  render(){
    CityModel.all().then( (res) => {
      console.log(res);
    })
    return (
      <div class="row">
        <CityList cities={this.props.cities}/>
        <CityView posts={this.props.posts}/>
      </div>
    );
  }
}

export default CitiesContainer;
