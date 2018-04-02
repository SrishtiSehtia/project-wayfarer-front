import axios from 'axios'

class CityModel {
  static all(){
    let request = axios.get("http://localhost:5000/api/cities")
    return request
  }
}

export default CityModel
