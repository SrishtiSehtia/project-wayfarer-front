import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CityList from './components/CityList';


class App extends Component {
  render() {
    const cities = [
      {
        name: 'San Francisco',
        country: 'USA'
      },
      {
        name: 'Los Angeles',
        country: 'USA'
      },
      {
        name: 'New Delhi',
        country: 'India'
      }
    ]

    return (
      <div className="App">
        <Header />
        <CityList />
      </div>
    );
  }
}

export default App;
