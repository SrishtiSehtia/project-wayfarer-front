import axios from 'axios'

class PostModel {
  static all(cityID){
    let request = axios.get(`http://localhost:5000/api/cities/${cityID}/posts`)
    return request
  }
  static create(post, cityID) {
    let request = axios.post(`http://localhost:5000/api/cities/${cityID}/posts`, post)
    return request
  }
}

export default PostModel
