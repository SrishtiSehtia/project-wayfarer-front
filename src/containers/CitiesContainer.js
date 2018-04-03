import React, { Component } from 'react';
import CityList from '../components/CityList';
import CityView from '../components/CityView';
import CityModel from '../models/City'
import withAuthorization from '../components/withAuthorization';

class CitiesContainer extends Component {
  constructor() {
    super()
    this.state = {
      cities: [],
      posts: [],
      city: {}
    }
    this.populateCityView = this.populateCityView.bind(this)
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    CityModel.all().then( (res) => {
      console.log(res);
      this.setState({
        cities: res.data
      })
    })
  }
  populateCityView(city){
    this.setState({
      posts: city.posts,
      city: city
    })
  }
  render(){
    return (
      <div class="row">
        <CityList cities={this.state.cities} populateCityView={this.populateCityView}/>
        <CityView city={this.state.city} posts={this.state.posts}/>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(CitiesContainer);
