import React, { Component } from 'react';
import City from './City';

class CityList extends Component {
  render() {
    return (
      <div class="row">

      <div class="col s12 m4 l3">
        {/* <!-- Note that "m4 l3" was added -->
        <!-- Grey navigation panel

              This content will be:
          3-columns-wide on large screens,
          4-columns-wide on medium screens,
          12-columns-wide on small screens  --> */}
          <City />
      </div>
      </div>
    );
  }
}

export default CityList;
