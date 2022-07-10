import { RESTDataSource } from 'apollo-datasource-rest';

class MusicfyAPI extends RESTDataSource {
  constructor() {
    super();
    this.usersURL = process.env.USERS;
  }

  willSendRequest(req) {
    req.headers.set('Authorization', this.context.token);
  }

  register(body) {
    console.log(body)
    return this.post(`${this.usersURL}register`, body);
  }

  login(body) {
    console.log(login)
    return this.get(`${this.usersURL}login`, body);
  }

  getUser(id){
    console.log(id)
    return this.get(`${this.usersURL}${id}`);
  }


}

export default MusicfyAPI;